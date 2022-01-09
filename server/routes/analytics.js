const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/overview', analyticsController.overview);
router.get('/analytics', analyticsController.analytics);

module.exports = router;
