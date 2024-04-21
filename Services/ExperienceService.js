import sqlite3 from 'sqlite3';
const db =new sqlite3.Database("../database.db")

import { Experience } from "../Models/Experience"

export function getExperience(id){
    return new Promise((resolve,reject)=> {
        db.all("select * from experience where users_id=?",[id],(err,rows)=> {
            if(err){
                reject(err.message)
            }else{
                const its_experience= rows.map(row => (
                    new Experience(row.StartDate,row.EndDate,row.Title)
                ));
                resolve(its_experience)
            }
        })
    })
}