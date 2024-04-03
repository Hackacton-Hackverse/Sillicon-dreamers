const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("database.db");


const UserSchema = {
  tableName: "Task",
  properties: {
    id: { type: "INTEGER", primaryKey: true, autoIncrement: true },
    title: { type: "TEXT" },
    description: { type: "TEXT" },
    completed: { type: "BOOLEAN" }, 
    locked: { type: "BOOLEAN" },
    folder_name: { type: "TEXT" },
    date:{type:"DATE"},
    password : {type: "TEXT"}
    
  }


  };
  
  // Créez la Task dans la base de données SQLite3
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS ${UserSchema.tableName} (
      ${Object.entries(UserSchema.properties)
        .map(([columnName, column]) => `${columnName} ${column.type}${column.primaryKey ? " PRIMARY KEY" : ""}${column.autoIncrement ? " AUTOINCREMENT" : ""}`)
        .join(",\n")}
    )`);
  });
 
  // Exportez le modèle Task
  const Task = {
    save: function () {
      const task = this;
  
      const insertQuery = `INSERT INTO ${UserSchema.tableName} (${Object.keys(UserSchema.properties).join(", ")})
        VALUES (${Object.keys(UserSchema.properties).map(() => "?").join(", ")})`;
      const values = Object.values(UserSchema.properties).map(column => task[column]);
      db.run(insertQuery, values, function (err) {
        if (err) {
          console.error(err);
        }
      });
    }
  };

  

 
  
  module.exports = {Task};