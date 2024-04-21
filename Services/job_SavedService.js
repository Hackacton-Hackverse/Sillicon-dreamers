import sqlite3 from 'sqlite3';
const db= new sqlite3.Database("../database.db")

import {JobSaved} from "../Models/job_saved"

export function getAllJobsSaved(id) {
    return new Promise((resolve,reject)=>{
        db.all("select * from jobsSaved where users_id = ?",[id],function (err,rows) {
            if(err){
                reject(err.message)
            }else{
                const jobsApplied =rows.map(row => (
                    new JobSaved(row.JobTitle,row.Company,row.Description,row.Type,row.location,row.city,row.pay,row.StartDate,row.Duration,row.users_id)
                ))
                resolve(jobsApplied)
            }
        })
    })
}

export function NonSaveJob(id){
    db.run(`DELETE FROM jobsSaved WHERE title = ?`,[Title],(err)=>{
        if(err){
            console.error(err.message);
        }else{
            console.log("le job n est plus dans les favoris");
        }
    })
}