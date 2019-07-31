const express = require('express');

const {
  getOverview,
  getTour,
  getloginForm,
  getAccount,
  updateUserData
} = require('./../controllers/viewsController');

const { isLoggedIn, protect } = require('./../controllers/authController');

const router = express.Router();

router.get('/', isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getloginForm);
router.get('/me', protect, getAccount);

// router.post('/submit-user-data', protect, updateUserData);

module.exports = router;
