import sqlite3 from 'sqlite3';

export class ExperienceNeeded {
  my_id=0
  constructor(Title) {
    this.Title = Title;
    this.id=ExperienceNeeded.my_id++;
    //id++
  }

  save() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO experience_needed (id,Title) VALUES (?)`;
    db.run(query, [this.id,this.Title], function(err) {
      if (err) {
        console.error(err);
      }
    });
    db.close();
  }

  

  // Autres méthodes CRUD spécifiques à la classe "Message"
}

