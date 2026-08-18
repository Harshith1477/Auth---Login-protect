const express = require('express');
const router = express.Router();
const authGuard = require('../middleware/authGuard');

// GET /protected/profile
router.get('/profile', authGuard, (req, res) => {
  const { id, email, created_at } = req.user;
  return res.status(200).json({ id, email, created_at });
});

// GET /protected/dashboard
router.get('/dashboard', authGuard, (req, res) => {
  const { id, email } = req.user;
  return res.status(200).json({
    message: 'Welcome to your dashboard!',
    user: { id, email }
  });
});

module.exports = router;
