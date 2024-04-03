const Task=require("../models/Task")
const ErrorResponse = require("../utils/errorResponse");

const {createTask,deleteTask,updateTask, updateTaskDescription,getAllTasks,getAllTaskFolder,getTask,filterTaskByCompleted,filterTaskByDate,completeTask,getAllTaskCompleted, NoncompleteTask, updateTaskPassword}=require("../service/tasksServices")


//creation d'une tache 

exports.createtask=async (req, res, next)=> {

    const {title,completed,locked,folder_name,date,password}=req.body
  

    try {
        createTask(title,completed,locked,folder_name,date,password)
        res.status(200).send({message:"task created"})
    }catch (error){
        next(error)
    }
};

//suppression d'une tache 

exports.deletetask=async (req, res, next)=> {

    const {title}=req.body
  

    try {
        deleteTask(title)
        res.status(200).send({message:"task deleted"})
    }catch (error){
        next(error)
    }
};


//update Task


exports.updatetask=async (req, res, next)=> {

    const {title,description,completed,locked,folder_name,date,password}=req.body
    

    try {
        updateTask(title, description, completed,locked,folder_name, date,password)
        res.status(200).send({message:"task update"})
    }catch (error){
        next(error)
    }
};

// update task description 

exports.updatetaskdesc=async (req, res, next)=> {

    const {title,description}=req.body
   

    try {
        updateTaskDescription(title,description)
        res.status(200).send({message:"task  description update"})
    }catch (error){
        next(error)
    }
};

//update task password


exports.updatetaskpass=async (req, res, next)=> {

    const {title,password}=req.body
  

    try {
        updateTaskPassword(title,password)
        res.status(200).send({message:"task  password update"})
    }catch (error){
        next(error)
    }
};





//get Task

exports.gettask=async (req, res, next)=> {

    const {title}=req.body

    try {
        getTask(title)
        .then((task)=>{
            res.status(200).send({task})
            res.status(200).send({message:"read  task "})
        })
       
    }catch (error){
        next(error)
    }
};


//getAlll Task


exports.getalltask=async (req, res, next)=> {
    try {
        getAllTasks()
        .then(taks=>{
            res.status(200).send({taks})
           
        })
    }catch (error){
        next(error)
    }
};


//getAllTaskFolder

exports.getallstackfolder=async (req,res,next)=>{

    const {folder_name}=req.body
    try {
        getAllTaskFolder(folder_name)
        .then(tasksFolder=>{
            res.status(200).send({tasksFolder})
        });
        res.status(200).send ({message:"read all task for folder"})
        
    }catch (error){
        next(error)
    }
}



//completed task 

exports.completetask=async (req,res,next)=>{
    
const {title}=req.body


try {
    completeTask(title)
    res.status(200).send({message:"task completed"})
}catch (error){
    next(error)
}

}

//non completed task

exports.noncompletetask=async (req,res,next)=>{
    
    const {title}=req.body
  
    
    try {
        NoncompleteTask(title)
        res.status(200).send({message:"task mark no completed"})
    }catch (error){
        next(error)
    }
    
    }

// get all task completed 

exports.getallstackcompleted=async (req,res,next)=>{


    try {
        getAllTaskCompleted()
        .then(tasksCompleted=>{
            
            res.status(200).send({tasksCompleted})
            
        })
        
    }catch (error){
        next(error)
    }
}