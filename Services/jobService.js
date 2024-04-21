import sqlite3 from 'sqlite3';
const db = new sqlite3.Database("../database.db");

import {Job} from "../Models/Jobs.js"
import { JobSaved } from "../Models/job_saved.js";
import { JobApplied } from "../Models/job_applied.js";

export function createJob(job){
    job.save()
    db.run(
        job.save()
      );
}

export function EditJob(job,id){
    db.run(`UPDATE jobs SET JobTitle=?,Company=?,Description=?,Type,location=?,city=?,StartDate=?,Duration=? where id=?`
    ,[job.JobTitle,job.Company,job.Description,job.Type,job.location,job.city,job.StartDate,job.Duration,id],(err)=>{
        if(err){
            console.error(err.message)
        }else{
            console.log("job modifie")
        }
    })
}

export function deleteJob(id) {
    db.run(
      `DELETE FROM jobs WHERE id = ?`,
      [id],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Job "${id}" supprimée.`);
        }
      }
    );
  }

export function getAllJobs() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM jobs`, function (err, rows) {
            if (err) {
                reject(err.message);
            } else {
                const jobs = rows.map(row => (
                    new Job(row.JobTitle,row.Company,row.Description,row.Type,row.location,row.city,row.pay,row.StartDate,row.Duration)
                    /*{
                    this.JobTitle = row.JobTitle;
                    this.Company = row.Company;
                    this.Description = row.Description;
                    this.Type = row.Type;
                    this.Location=row.location
                    this.city = row.city;
                    this.pay= row.pay
                    this.StartDate= row.StartDate
                    this.Duration= row.Duration

                }*/));
                resolve(jobs);
            }
        });
    });
}

export function SaveJob(job){
    //const jobsaved=new JobSaved(job.JobTitle,job.Company,job.Description,job.Type,job.location,job.city,job.StartDate,job.Duration,id)
    job.SaveJob();
}

export function ApplyJob(job){
    //const jobApplied=new JobApplied(job.JobTitle,job.Company,job.Description,job.Type,job.location,job.city,job.StartDate,job.Duration,id)
    job.SaveJobApplied();
}