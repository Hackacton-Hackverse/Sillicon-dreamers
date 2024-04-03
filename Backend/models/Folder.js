const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");

const CategoryTaskSchema = {
  tableName: "Folder",
  properties: {
    id: { type: "INTEGER", primaryKey: true, autoIncrement: true },
    folder_name: { type: "TEXT" },
  }
};

// Créer la table 'catégorie_task' dans la base de données SQLite3
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS ${CategoryTaskSchema.tableName} (
    ${Object.entries(CategoryTaskSchema.properties)
      .map(([columnName, column]) => `${columnName} ${column.type}${column.primaryKey ? " PRIMARY KEY" : ""}${column.autoIncrement ? " AUTOINCREMENT" : ""}`)
      .join(",\n")}
  )`);
});

// Exporter le modèle folder
const Folder = {
  save: function () {
    const folder = this;

    const insertQuery = `INSERT INTO ${CategoryTaskSchema.tableName} (${Object.keys(CategoryTaskSchema.properties).join(", ")})
      VALUES (${Object.keys(CategoryTaskSchema.properties).map(() => "?").join(", ")})`;
    const values = Object.values(CategoryTaskSchema.properties).map(column => folder[column]);
    db.run(insertQuery, values, function (err) {
      if (err) {
        console.error(err);
      }
    });
  }
};

module.exports = { Folder };
