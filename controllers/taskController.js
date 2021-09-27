const Task = require("../models/task.js")

exports.addTask = function (req, res){
    const task = new Task({
        text: req.body.text
    });

    task.save(function (err, doc){
        if(err){
            res.send(err);
        }
        res.send(doc);
    })
}

exports.getTasks = function (req, res){
    Task.find({}, ((error, result) => {
        if(error){
            res.send(err);
        }
        res.send(result);

    }))
}


exports.updateTask = function (req, res){
    const id = req.params.id;
    Task.findByIdAndUpdate(id, {status: true}, function (err, doc){
        if(err){
            res.send(err);
        }
        res.send(doc);
    })
}

exports.deleteTasks = function (req, res){
    const id = req.params.id;
    Task.findByIdAndDelete(id,  function (err, doc){
        if(err){
            res.send(err);
        }
        res.send(doc);
    })
}