const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const memberRoutes = require('./routes/memberRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', memberRoutes);

// ✅ MongoDB Atlas connection (ENV se)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => console.log(err));

// test route
app.get('/', (req, res) => {
  res.send('Server running 🚀');
});

// ✅ Dynamic PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});