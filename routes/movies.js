const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies')

router.post('/', controller.create);

router.get('/', controller.list);

router.get('/:id', controller.index);

router.put('/:id', controller.replace);

router.patch('/actor', controller.addActor);

router.patch('/:id', controller.update);

router.delete('/:id', controller.destroy);


module.exports = router;
