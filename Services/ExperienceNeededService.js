import sqlite3 from 'sqlite3';
const db =new sqlite3.Database("../database.db")

import { ExperienceNeeded } from "../Models/ExperienceNeeded"

export function getExperienceNeeded(id){
    return new Promise((resolve,reject)=>{
        db.all("select * from experience_needed where job_id=?",[id],(err,rows)=>{
            if(err){
                reject(err.message)
            }else{
                const jobExperience= rows.map(row =>(
                    new ExperienceNeeded(row.Title)
                ))
                resolve(jobExperience)
            }
        })
    })
}