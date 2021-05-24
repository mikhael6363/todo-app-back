const { Router } = require('express');
const paginate = require('../middlewares/paginate.mw');
const TaskController = require('../controller/task.controller');

const taskRouter = Router();

taskRouter
  .route('/')
  .post(TaskController.createTask)
  .get(paginate, TaskController.getTasks);

taskRouter
  .route('/:taskId')
  .patch(TaskController.updateTask)
  .delete(TaskController.deleteTask);

module.exports = taskRouter;
