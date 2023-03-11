const mongoose = require('mongoose');
require('dotenv/config');

//configure mongoose
mongoose.connect(
  process.env.MONGOOSE_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('connected to MongoDB');
    }
  }
);
