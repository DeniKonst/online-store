const express = require('express');
const passport = require('passport');
const upload = require('../middleware/upload');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', passport.authenticate('jwt', {session: false}), categoryController.getAll);
router.get('/:id', passport.authenticate('jwt', {session: false}), categoryController.getById);
router.delete('/:id', passport.authenticate('jwt', {session: false}), categoryController.remove);
// upload.single set single download files, 'image' - type file
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), categoryController.create);
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), categoryController.update);

module.exports = router;
