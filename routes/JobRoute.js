import express from 'express';
const router = express.Router();
import {
    PostJob,
    editJob,
    DeleteJob,
    GetAllJobs,
    saveJobs,
    applyJobs
} from "../Controllers/jobController.js"



//post methods
router.route("/create").post(PostJob)

//delete methods
//router.route("/delete").delete(deletetask)

// modify methods 

router.route("/save").put(saveJobs)
router.route("/apply").put(applyJobs)
//router.route("/nonCompletedTask").put(noncompletetask)
//router.route("/update/description").put(updatetaskdesc)
//router.route ("/update/password").put(updatetaskpass)


//get methods

//router.route("/get").get(gettask)
router.route("/getAll").get(GetAllJobs)
//router.route("/getAllfolder").get(getallstackfolder)
//router.route("/getAllTaskCompleted").get(getallstackcompleted)


router.use ("/",(req,res,next)=>{

    res.status(404).json({error:"page not found "})
})

export default router;