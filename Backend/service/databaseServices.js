const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");

// Crée la table "task" si elle n'existe pas déjà
const createTaskTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Task (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      completed BOOLEAN,
      locked  BOOLEAN,
      folder_name TEXT,
      date DATE,
      password TEXT
    )
  `);
};

// Crée la table "catégorie_task" si elle n'existe pas déjà
const createCategoryTaskTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Folder (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      folder_name TEXT,
      
    )
  `);
};

debug("sqlite3 connected")

module.exports={createCategoryTaskTable,createTaskTable}
