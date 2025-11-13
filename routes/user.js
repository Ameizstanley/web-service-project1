const express = require('express');
const router = express.Router();

const userController = require('../controllers/user')

router.get('/', userController.getAll);

router.post('/', userController.create);

router.get('/:id', userController.getSingle);

router.put('/:id', userController.update);

router.delete('/:id', userController.remove);

module.exports = router;