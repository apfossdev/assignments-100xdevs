const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// Define mongoose schemas
const userSchema = new Schema({
  // userSchema here
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

// Define mongoose models
const User = mongoose.model('User', userSchema);

// Export mongoose models
module.exports = {
    User
}