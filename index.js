const express = require('express');
const app = express();
app.use(express.json());
const Port = process.env.PORT || 8080;
const blogRouter = require('./routes/blogRoutes');
app.use('/api/blogs', blogRouter);

app.listen(Port, () => {
  console.log(`server is up: localhost:${Port}`);
});
