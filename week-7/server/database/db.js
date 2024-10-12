const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Define mongoose schemas
const userSchema = new Schema({
  // userSchema here
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  purchasedCourses: [{ type: String, ref: "Course" }] //an array of courses
});

const adminSchema = new Schema({
  // adminSchema here
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

const courseSchema = new Schema({
  // courseSchema here
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageLink: { type: String, required: true },
  published: { type: Boolean, default: false },
  courseId: { type: String, required: true},
  publisherId: { type: ObjectId, ref:'Admin', required: true } //whenever referencing to other data models use object id
});

// Define mongoose models
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);

// Export mongoose models
module.exports = {
    User,
    Admin,
    Course
}

