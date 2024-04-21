import sqlite3 from 'sqlite3';
const db= new sqlite3.Database("../database.js")

import { Skills } from "../Models/Skills"

export function getUserSkill(id){
    return new Promise((resolve,reject)=>{
        db.all("select * from skills where user_id=?",[id],(err,rows)=>{
            if(err){
                reject(err.message)
            }else{
                const its_skills = rows.map(row => (
                    new Skills(row.Title)
                ))
                resolve(its_skills)
            }
        })
    })
}