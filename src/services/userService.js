import { createJobURL,saveJobURL,applyJobURL,getAllJobsURL } from "./Routes";
import axios from "axios";

const createJob = async(info)=>{
    const response = await axios.post(createJobURL,info);
    if(response.status == 200){
        console.log("job ajouté");
    }
}
const applyJob = async(info)=>{
    const response = await axios.post(applyJobURL,info);
    if(response.status == 200){
        console.log("job applied");
    }
}
const saveJob = async(info)=>{
    const response = await axios.post(saveJobURL,info);
    if(response.status == 200){
        console.log("job sauvegardé");
    }
}
const getJobs = async(info)=>{
    const response = await axios.post(getAllJobsURL,info);
    if(response.status == 200){
        console.log("jobs chargés");
    }
}

export {createJob,saveJob,getJobs,applyJob};