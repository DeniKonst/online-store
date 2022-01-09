const express = require('express');
const router = express.Router();
const positionController = require('../controllers/positionController');

router.get('/:categoryId', positionController.getByCategoryId);
router.post('/', positionController.create);
router.patch('/:id', positionController.update);
router.delete('/:id', positionController.remove);

module.exports = router;
