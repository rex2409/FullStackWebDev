const path = require('path');
const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todocontroller');


router.get('/gettodos',todoController.getGetTodos);

router.post('/addtodo',todoController.postAddTodo);

router.post('/deletetodo',todoController.postDeleteTodo);

router.get('/increasepriority',todoController.getIncreasePriority);

router.get('/decreasepriority',todoController.getDecreasePriority);

module.exports = router;