import sqlite3 from 'sqlite3';

 export class User {

  my_id=0
  constructor(FirstName,LastName,Email,Password,PhoneNumber,About,Education,Language,location,City) {
    this.FirstName=FirstName
    this.id=User.my_id++
    this.LastName=LastName
    this.Email=Email
    this.Password=Password
    this.PhoneNumber=PhoneNumber
    this.About=About
    this.Education=Education
    this.Language=Language
    this.location=location
    this.City=City
    User.my_id=User.my_id+1
  }


  save() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO users (id,FirstName,LastName,Email,Password,PhoneNumber,About,Education,Language,location,City) VALUES (?, ?, ?,?,?,?,?,?,?,?,?)`;
    db.run(query, [this.id,this.FirstName,this.LastName,this.Email,this.Password,this.PhoneNumber,this.About,this.Education,this.Language,this.location,this.City], function(err) {
      if (err) {
        console.error(err);
      }
    });
    db.close();
  }

  
  // Autres méthodes CRUD spécifiques à la classe "Message"
}

