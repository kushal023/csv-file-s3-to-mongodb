const blogModel = require('../models/blog');
exports.getAllBlogs = async () => {
  return await blogModel.find();
};
exports.createBlog = async (blog) => {
  return await blogModel.create(blog);
};
