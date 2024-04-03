const Folder=require("../models/Folder")
const ErrorResponse = require("../utils/errorResponse");


const {createFolderTask,getFolderByName,updateFolderByName,getAllFolder, deleteFolder}=require("../service/FolderServices")

 

//creation d'un folder 

exports.createfolder=async (req, res, next)=> {

    const {folder_name}=req.body


    try {
        createFolderTask(folder_name)
        res.status(200).send({message:"folder created"})
    }catch (error){
        next(error)
    }
};


//suppression d'un folder 

exports.deletefolder=async (req, res, next)=> {

    const {folder_name}=req.body
    

    try {
        deleteFolder(folder_name)
        res.status(200).send({message:"task deleted"})
    }catch (error){
        next(error)
    }
};


// update d'un folder 



exports.updatefolder=async (req, res, next)=> {

    const {folder_name}=req.body
    

    try {
        updateFolderByName(folder_name)
        res.status(200).send({message:"folder update"})
    }catch (error){
        next(error)
    }
};


//get folder

exports.getfolder=async (req, res, next)=> {

    const {folder_name}=req.body

    try {
        getFolderByName(folder_name)
        .then((folder)=>{
            res.status(200).send({folder})
          
        })
      
    }catch (error){
        next(error)
    }
};

//get all folder 


exports.getallfolder=async (req, res,next) => {


    try {
        getAllFolder()
       
        getAllFolder()
        .then(folders => {
        JSON.stringify(folders);
        res.status(200).send({folders})
      
     })
    }catch (error){
        next(error)
    }
    
}