const express = require ("express")
const router=express.Router()



const { createfolder,deletefolder, updatefolder, getfolder, getallfolder }=require ("../controllers/folderController");


router.route("/create").post(createfolder)
router.route("/delete").post(deletefolder)
router.route("/update").post(updatefolder)
router.route("/get").get(getfolder)
router.route("/getAll").get(getallfolder)


router.use ("/",(req,res,next)=>{

    res.status(404).json({error:"page not found "})
})

module.exports=router;
