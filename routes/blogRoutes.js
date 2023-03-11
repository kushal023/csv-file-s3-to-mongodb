const express = require('express');
const {
  getAllBlogs,
  createBlog,
} = require('../controllers/blogController');
const router = express.Router();
router.route('/').get(getAllBlogs).post(createBlog);

module.exports = router;
