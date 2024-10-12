const express = require('express');
const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middleware/auth");
const { Admin, Course } = require("../database/db");

const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

// Admin routes
router.post("/signup", async (req, res) => {
  // logic to sign up admin

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

    await Admin.create({
      username: username,
      password: hashedPassword,
    });
  } catch (e) {
    dbErrorThrown = true;
    res.json({
      message: "Admin already exists",
    });
  }

  if (!dbErrorThrown) {
    res.json({
      message: "Admin created successfully",
    });
  }

});

router.post("/login", async (req, res) => {
  // logic to log in admin
  const username = req.body.username;
  const password = req.body.password;

  // It searches for a single document in the Admin collection that matches the provided query criteria.
  const response = await Admin.findOne({
    username: username
  });

  if (!response) {
    res.status(403).json({
      message: "Admin does not exist in our db",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
    //create jwt
    const token = jwt.sign(
      {
        id: response._id.toString(), //this object id is the id of the object of the admin user in the Admin collection
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

router.post("/courses", authMiddleware, async (req, res) => {
    // logic to create a course
    //shorthand syntax below and wrap in try catch so that your server doesn't stop working, and keeps running even if wrong requests are sent
    try{
        //we use below instead of const title = req.body.title and so on for all of them
        const { title, description, price, imageLink, published } = req.body;

        const courseId = uuidv4();
        const publisherId = req.userId;

        await Course.create({
          title,
          description,
          price,
          imageLink,
          published,
          courseId,
          publisherId,
        });

        res.json({
          message: "Course created successfully",
          courseId: courseId,
        });

    }catch(error){
        console.error("Error creating course:", error);
        res
          .status(500)
          .json({ message: "Failed to create course", error: error.message });
    }

});

router.put("/courses/:courseId", authMiddleware, async (req, res) => {
  // logic to edit a course
  try{
    const courseId = req.params.courseId;

    const { title, description, price, imageLink, published } = req.body;

    const updatedCourse = await Course.findOneAndUpdate(
        { courseId: courseId },
        { title, description, price, imageLink, published }, 
        { new: true } // Return the updated document
        );
    
    if (!updatedCourse) {
        return res.status(404).json({ message: "Course not found" });
    }

    res.json({
      message: "Course updated successfully",
    });

  }catch(error){
    console.error("Error updating course:", error);
    res
      .status(500)
      .json({ message: "Failed to update course", error: error.message });
  }
  
});

router.get("/courses", authMiddleware, async (req, res)  => {
    // logic to get all courses
    try{
        const publisherId = req.userId;

        const courses = await Course.find({publisherId: publisherId}).exec(); //.exec() is best practice when using promises, also here find is used to get all the courses with this publisherId
        res.json({
            courses: courses
        });
    }catch(error){
        console.error("Error getting courses:", error);
        res
          .status(500)
          .json({ message: "Failed to get all courses", error: error.message });
    }
});

module.exports = router;
