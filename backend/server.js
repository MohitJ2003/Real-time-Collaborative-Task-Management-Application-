const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

mongoose.connect("mongodb+srv://MJdb:tQxWPxPUjIQUimYl@mjcluster.dpw9yvq.mongodb.net/?retryWrites=true&w=majority&appName=MJCluster")
    .then(() => {
        console.log('MongoDB connected');
        app.listen(5000, () => console.log('Server running on port 5000'));
    })
    .catch(err => console.log(err));




/*
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
});*/
