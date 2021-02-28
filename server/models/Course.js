const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  teacher: {
    type: String,
    required: true,
  },
  prerequisite: {
    type: [String],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  review: {
    type: [String],
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  enrolledStudent: {
    id: String,
    type: [String],
  },
});

module.exports = Course = mongoose.model('course', CourseSchema);
