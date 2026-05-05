const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const memberRoutes = require('./routes/memberRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', memberRoutes);

// 🔥 MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/nestedtree')
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Server running 🚀');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});