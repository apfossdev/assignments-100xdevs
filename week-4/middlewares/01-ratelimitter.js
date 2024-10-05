// You have to create a middleware for rate limiting a users request based on their username passed in the header

const express = require("express");
const app = express();

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

app.use((req, res, next) => {
  // user-id should be pushed to an object num of requests per user and increased by 1
  const userId = req.header('user-id');
  if(!numberOfRequestsForUser[userId]) numberOfRequestsForUser[userId] = 0; //initialize to 0 if the user id already doesn't exist to prevent unexpected behaviour
  numberOfRequestsForUser[userId]++;
  // every 1 sec it is initialized to 0 -> done already before itself
  // if particular user id has <= 5 call next
  if(numberOfRequestsForUser[userId] <= 5) {
    next();
  }
  // else block the user id with 404
  else{
    res.status(404).send(`You're blocked now dude!`);
  }
});

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

module.exports = app;

// app.listen(3000);