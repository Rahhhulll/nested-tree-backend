const express = require('express');
const router = express.Router();
const Member = require('../models/Member');


// 🔥 1. ADD MEMBER (POST)
router.post('/members', async (req, res) => {
  try {
    const { name, parentId } = req.body;

    // validation
    if (!name || !/^[A-Za-z]+$/.test(name)) {
      return res.status(400).json({ message: 'Invalid name' });
    }

    const newMember = new Member({
      name,
      parentId: parentId || null
    });

    const saved = await newMember.save();

    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// 🔥 2. GET ALL MEMBERS
router.get('/members', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;