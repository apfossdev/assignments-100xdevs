//  TODO: Can you create backend with standard folder structure like: week-4/hard ???
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { z } = require("zod");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const { User, Admin, Course } = require("./database/db");
const { authMiddleware } = require("./middleware/auth");

const { rateLimit } = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});


const app = express();
app.use(express.json());
app.use(limiter); //Apply the rate limiter for all requests

const secret = process.env.JWT_SECRET;  // This should be in an environment variable in a real application
const port = process.env.PORT;
const dbConnectionString = process.env.MongoDbConnectionString;

const adminRoutes = require('./routes/admin');  // Import admin routes
const userRoutes = require('./routes/user');  // Import user routes

// Connect to MongoDB
mongoose.connect(dbConnectionString); 

app.use('/admin', adminRoutes);  // All admin routes will be prefixed with /admin
app.use('/users', userRoutes);  // All user routes will be prefixed with /user

app.listen(port, () => {
    console.log('Server is listening on port 3000');
});