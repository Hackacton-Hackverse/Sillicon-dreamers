import sqlite3 from 'sqlite3';
const db= new sqlite3.Database("../database.db")
import {JobApplied} from "../Models/job_applied"

export function getAllJobsapplied(id) {
    return new Promise((resolve,reject)=>{
        db.all("select * from jobsApplied where users_id = ?",[id],function (err,rows) {
            if(err){
                reject(err.message)
            }else{
                const jobsApplied =rows.map(row => (
                    new JobApplied(row.JobTitle,row.Company,row.Description,row.Type,row.location,row.city,row.pay,row.StartDate,row.Duration,row.users_id)
                ))
                resolve(jobsApplied)
            }
        })
    })
}