const express = require('express');
const router = express.Router();
const controller = require('../controllers/members')

router.post('/', controller.create);

router.get('/', controller.list);

router.get('/:id', controller.index);

router.put('/:id', controller.replace);

router.patch('/:id', controller.update);

router.patch('/addFavoriteActor', controller.addFavoriteActor);

router.patch('/addFavoriteDirector', controller.addFavoriteDirector);

router.patch('/addFavoriteGenre', controller.addFavoriteGenre);

router.delete('/:id', controller.destroy);


module.exports = router;
