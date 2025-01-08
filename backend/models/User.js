const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    mobileNumber: String,
    experiences: [String],
    projects: [String],
    hobbies: [String],
    socialMedia: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema); // This is correct
