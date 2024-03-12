const path = require('path');
const express = require('express');
const router = express.Router();

const controller = require('../controller/blogs')

router.get('/', controller.getBlogs);
router.get('/blogs', controller.getBlogs);

router.post('/blogs', controller.postBlogs);

router.get('/delete', controller.getDelete);

router.get('/update', controller.getUpdate);
router.post('/update', controller.postUpdate);

router.get('/details', controller.getDetails);

router.get('/actors', controller.getActors);
router.post('/actors', controller.postActors);

router.get('/delete/actor', controller.getDeleteActor);

router.get('/update/actor', controller.getUpdateActor);
router.post('/update/actors', controller.postUpdateActors);

module.exports = router;