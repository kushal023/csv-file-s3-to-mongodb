const blogService = require('../services/blogServices');

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json({ data: blogs, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.createBlog = async (req, res) => {
  try {
    const blog = await blogService.createBlog(req.body);
    res.json({ data: blog, status: 'success' });
  } catch (err) {}
};
