const express = require("express");
const { Router } = require("express");
const router = Router();
const { User } = require("../database/db");

const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

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

//logout is done on the client side itself



module.exports = router;