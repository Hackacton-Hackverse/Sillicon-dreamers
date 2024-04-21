import sqlite3 from 'sqlite3';

export class Experience {

  my_id=0;
  constructor(user_id,StartDate,EndDate,Title) {
    this.StartDate = StartDate;
    this.id=Experience.my_id;
    this.user_id=user_id;
    this.EndDate = EndDate;
    this.Title = Title;
    //id++
  }

  save() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO experience (id,user_id,StartDate,EndDate,Title) VALUES (?,?, ?, ?,?)`;
    db.run(query, [this.id,this.user_id,this.StartDate, this.EndDate, this.Title], function(err) {
      if (err) {
        console.error(err);
      }
    });
    db.close();
  }

  
  // Autres méthodes CRUD spécifiques à la classe "Message"
}

