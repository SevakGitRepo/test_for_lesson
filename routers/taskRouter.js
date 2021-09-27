const express = require("express");
const taskController = require("../controllers/taskController.js");

const taskRouter = express.Router();

taskRouter.post("/create", taskController.addTask)
taskRouter.get("/", taskController.getTasks)
taskRouter.put("/update/:id", taskController.updateTask)
taskRouter.delete("/delete/:id", taskController.deleteTasks)

module.exports = taskRouter;