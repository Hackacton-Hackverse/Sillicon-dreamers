import sqlite3 from 'sqlite3';

import{ Job } from "./Jobs.js"


export class JobApplied extends Job {
 
  constructor(JobTitle,Company,Description,Type,location,city,StartDate,Duration,user_id) {
    this.user_id = user_id;
    super(id,JobTitle,Company,Description,Type,location,city,StartDate,Duration);
    
  }

  SaveJobApplied() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO jobsApplied (id,JobTitle,Company,Description,Type,location,city,StartDate,Duration,users_id) VALUES (?, ?, ?,?,?,?,?,?,?)`;
    db.run(query, [this.id,this.JobTitle,this.Company,this.Description,this.Type,this.location,this.city,this.StartDate,this.Duration], function(err) {
      if (err) {
        console.error(err);
      }
    });
    db.close();
  }

  

}

