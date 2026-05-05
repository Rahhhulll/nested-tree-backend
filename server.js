const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const memberRoutes = require('./routes/memberRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', memberRoutes);

// ✅ MongoDB Atlas connection (FIXED)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => console.log('Mongo Error ❌:', err));

// test route
app.get('/', (req, res) => {
  res.send('Server running 🚀');
});

// ✅ Dynamic PORT (Render ke liye correct)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});