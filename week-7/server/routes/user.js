const express = require("express");
const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middleware/auth");
const { User, Course } = require("../database/db");

const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

// User routes
router.post("/signup", async (req, res) => {
  // logic to sign up user
  //input validation with zod
  const requiredBody = z.object({
    username: z.string().min(3).max(100),
    password: z.string().min(3).max(100),
  });

  const parsedDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parsedDataWithSuccess.success) {
    res.json({
      message: "Incorrect format",
      error: parsedDataWithSuccess.error,
    });
    return;
  }

  //send validated data to db
  const username = req.body.username;
  const password = req.body.password;

  let dbErrorThrown = false;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await User.create({
      username: username,
      password: hashedPassword,
    });
  } catch (e) {
    dbErrorThrown = true;
    res.json({
      message: "User already exists",
    });
  }

  if (!dbErrorThrown) {
    res.json({
      message: "User created successfully",
    });
  }
});

router.post("/login", async (req, res) => {
  // logic to log in user
  const username = req.body.username;
  const password = req.body.password;

  const response = await User.findOne({
    username: username,
  });

  if (!response) {
    res.status(403).json({
      message: "User does not exist in our db",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
    //create jwt
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      secret
    );

    res.json({
      message: "Logged in successfully",
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

router.get("/courses", authMiddleware, async (req, res) => {
  // logic to list all courses
  try{
    // Fetch all courses but only include the following properties except _id(default in all objects)
    const courses = await Course.find().select('courseId title description price imageLink published -_id');
    res.json(courses);
  }catch(error){
    console.error("Error :", error);
    res
      .status(500)
      .json({ message: "Error fetching", error: error.message });
      }
});

router.post("/courses/:courseId", authMiddleware, async (req, res) => {
  // logic to purchase a course
  const courseId = req.params.courseId;
  const userId = req.userId;

  const purchaseCourse = await User.findOneAndUpdate(
    { _id: userId },
    { $push: { purchasedCourses: courseId } },//to push courseId into this purchased courses array here},
    { new: true } // Return the updated document
  );

  if(!purchaseCourse){
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: "Course purchased successfully"});
});

router.get("/purchasedCourses", authMiddleware, async (req, res) => {
  // logic to view purchased courses
  const userId = req.userId;
  const user = await User.findOne({
    _id: userId,
  });
  const purchasedCoursesIds = user.purchasedCourses;
  const purchasedCoursesData = [];

  for(let i = 0; i < purchasedCoursesIds.length; i++){
    const courseId = purchasedCoursesIds[i];
    const courseData = await Course.findOne({
      courseId: courseId,
    }).select("courseId title description price imageLink published -_id");
    purchasedCoursesData.push(courseData);
  }
  res.json({
    purchasedCourses: purchasedCoursesData
  })
});

module.exports = router;
