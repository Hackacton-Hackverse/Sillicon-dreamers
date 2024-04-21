import sqlite3 from 'sqlite3';

export class Job {

   my_id=0
  constructor(JobTitle,Company,Description,Type,location,city,StartDate,Duration) {
    this.JobTitle = JobTitle;
    this.id=Job.my_id++;
    this.Company = Company;
    this.Description = Description;
    this.Type = Type;
    this.Location=location
    this.city = city;
    this.pay= pay
    this.StartDate= StartDate
    this.Duration= Duration
  }

  save() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO jobs (id,JobTitle,Company,Description,Type,location,city,StartDate,Duration) VALUES (?, ?, ?,?,?,?,?,?)`;
    db.run(query, [this.id,this.JobTitle,this.Company,this.Description,this.Type,this.location,this.city,this.StartDate,this.Duration], function(err) {
      if (err) {
        console.error(err);
      }else{
        console.log("le job est bien cree");
      }
    });
    db.close();
  }

  
  // Autres méthodes CRUD spécifiques à la classe "Message"
}
