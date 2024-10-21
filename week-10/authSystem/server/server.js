const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors') //to connect FE and BE

dotenv.config()

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", //React frontend url
  methods: ['GET', 'POST', 'PUT', 'DELETE', ],
  allowedHeaders: ['Content-Type', 'Authorization'], //allow specific headers
  credentials: true, // as frontend is sending cookies or auth headers
};

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
app.use(cors(corsOptions)); //Apply the cors middleware

const port = process.env.PORT;
const dbConnectionString = process.env.MongoDbConnectionString;

const userRoutes = require('./routes/user');  // Import user routes

// Connect to MongoDB
mongoose.connect(dbConnectionString); 

app.use('', userRoutes);  // All user routes will be prefixed with nothing

app.listen(port, () => {
  console.log("Server is listening on port 3000");
});
