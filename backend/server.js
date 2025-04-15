const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mern-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
