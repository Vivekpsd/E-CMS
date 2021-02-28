const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Course = require('../../models/Course');
//All course

//CourseDetails

// @route   GET api/course/me
// @desc
// @access  Public
router.get('/', (req, res) => res.json({ msg: 'Course Works' }));

// @route    POST api/course
// @desc     Create or update Course
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('teacher', 'Teacher Name is Required').not().isEmpty(),
      check('title', 'Course Title is Required').not().isEmpty(),
      check('description', 'Description name is Required').not().isEmpty(),
      check('content', 'Course Content is required').not().isEmpty(),
      check('startDate', 'Start date of course is Required').not().isEmpty(),
      check('endDate', 'Ending date of course is Required').not().isEmpty(),
      check('prerequisite', 'Prerequisite is Required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      teacher,
      title,
      description,
      content,
      startDate,
      endDate,
      prerequisite,
    } = req.body;

    //Build Course Object
    const courseFields = {};
    if (teacher) courseFields.teacher = teacher;
    if (title) courseFields.title = title;
    if (content) courseFields.content = content;
    if (description) courseFields.description = description;
    if (startDate) courseFields.startDate = startDate;
    if (endDate) courseFields.endDate = endDate;
    if (prerequisite) {
      courseFields.prerequisite = prerequisite
        .split(',')
        .map((preq) => preq.trim());
    }
    console.log(courseFields.prerequisite);

    try {
      let course = await Course.findOne({ title });

      if (course) {
        //update
        course = await Course.findOneAndUpdate(
          { id: req.id },
          { $set: courseFields },
          { new: true }
        );
        return res.json(course);
      }
      //Create
      course = new Course(courseFields);
      await course.save();
      res.json(course);
    } catch (err) {
      console.error(err.message);
      res.status(400).send('Server Error');
    }
  }
);

module.exports = router;
