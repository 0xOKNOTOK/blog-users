const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const config = require('./utils/config');
const newDatabaseConnection = require('./utils/dbInit');
const blogRouter = require('./controllers/blogs');

newDatabaseConnection();

app.use(cors());
app.use(express.json());

app.use('/', blogRouter);

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});