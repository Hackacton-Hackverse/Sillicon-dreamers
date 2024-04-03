const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");


// Crée une nouvelle tâche dans la base de données
/* function createTask(title, description, completed,date,password) {
    db.run(
      `INSERT INTO task (title, description, completed, date,password) VALUES (?, ?, ?, ?, ?)`,
      [title, description, completed, date, password],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Tâche "${title}" avec l'ID ${this.lastID} a été créée.`);
        }
      }
    );
  } */

  // Crée une nouvelle tâche sans la description  dans la base de données
function createTask(title,completed,locked,folder_name,date,password) {
  db.run(
    `INSERT INTO task (title,completed,locked,folder_name,date,password) VALUES (?,?,?,?,?,?)`,
    [title,completed,locked,folder_name,date, password],
    function (err) {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`Tâche "${title}" dans le dossier "${folder_name}" a été créée.`);
      }
    }
  );
}





  
  // Récupère une tâche en fonction de son titre
  function getTask(title) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM task WHERE title = ?`, [title], function (err, row) {
            if (err) {
                reject(err.message);
            } else {
                if (row) {
                    const task = {
                        id: row.id,
                        title: row.title
                    };
                    resolve(task);
                } else {
                    reject(`Aucune tâche trouvée avec le titre "${title}".`);
                }
            }
        });
    });
}

  
  // Récupère toutes les tâches
  function getAllTasks() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM task`, function (err, rows) {
            if (err) {
                reject(err.message);
            } else {
                const tasks = rows.map(row => ({
                    id: row.id,
                    title: row.title,
                    description:row.description,
                    completed:row.completed,
                    locked:row.locked,
                    folder_name:row.folder_name,
                    date:row.date,
                    password:row.password

                }));
                resolve(tasks);
            }
        });
    });
}

  //recupère toutes les tâches pour un dossier particulier 
  function getAllTaskFolder(folder_name) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM task WHERE folder_name= ?`, [folder_name], function (err, rows) {
            if (err) {
                reject(err.message);
            } else {
                if (rows.length > 0) {
                    const tasksFolder = rows.map(row => ({
                        id: row.id,
                        title: row.title,
                        folder_name: row.folder_name,
                        locked:row.locked,
                        date:row.date,
                        password:row.password
                    }));
                    resolve(tasksFolder);
                } else {
                    reject(`Aucune tâche trouvée avec le nom de dossier "${folder_name}".`);
                }
            }
        });
    });
}

    //recupère toutes les tâches completed
    function getAllTaskCompleted() {
      return new Promise((resolve, reject) => {
          db.all(`SELECT * FROM task WHERE completed= ?`, [true], function (err, rows) {
              if (err) {
                  reject(err.message);
              } else {
                  if (rows.length > 0) {
                      const tasksCompleted = rows.map(row => ({
                          id: row.id,
                          title: row.title,
                          completed: row.completed
                      }));
                      resolve(tasksCompleted);
                  } else {
                      reject(`Aucune tâche trouvée avec le statut completé.`);
                  }
              }
          });
      });
  }
  



  // Met à jour une tâche 
function updateTask(title, description, completed,locked,folder_name, date,password) {
    db.run(
      `UPDATE task SET title = ?, description = ?,completed = ?,locked=?,folder_name=?,date = ?,password=?`
      [title, description, completed,locked,folder_name,date,password],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Tâche avec le titre ${title} mise à jour.`);
        }
      }
    );
  }



  // Met à jour une tâche en modifiant juste la description
function updateTaskDescription(title, description) {
  db.run(
    `UPDATE task SET description = ? WHERE title = ?`,
    [description, title],
    function (err) {
      if (err) {
        console.error(err.message);
      } else {
        // console.log(`Tâche avec le titre "${title}" mise à jour avec la nouvelle description "${description}".`);
      }
    }
  );
}

//met a jour une tache en modifiant sont mot de passe 

function updateTaskPassword (title,password) {
  db.run(
    `UPDATE task SET password = ?,locked= ? WHERE title = ?`,
    [password,true, title],
    function (err) {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`Tâche avec le titre "${title}" mise à jour avec le nouveau mot de passe "${password}".`);
      }
    }
  );

}
  
  

  // Supprime une tâche en fonction de son titre
function deleteTask(title) {
    db.run(
      `DELETE FROM task WHERE title = ?`,
      [title],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Tâche "${title}" supprimée.`);
        }
      }
    );
  }
  function deleteTaskByFolder(folder_name) {
    db.run(
      `DELETE FROM task WHERE folder_name = ?`,
      [folder_name],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Tâches de "${folder_name}" supprimées.`);
        }
      }
    );
  }

// Marque une tâche comme complétée en fonction de son titre
function completeTask(title) {
    db.run(
      `UPDATE task SET completed = ? WHERE title = ?`,
      [true, title],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Tâche "${title}" marquée comme complétée.`);
        }
      }
    );
  }




// Marque une tâche comme non complétée en fonction de son titre
function NoncompleteTask(title) {
  db.run(
    `UPDATE task SET completed = ? WHERE title = ?`,
    [false, title],
    function (err) {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`Tâche "${title}" marquée comme non complétée.`);
      }
    }
  );
}



  // Filtrer les tâches en fonction de la date
function filterTaskByDate(date) {
    db.all(
      `SELECT * FROM task WHERE date = ?`,
      [date],
      function (err, rows) {
        if (err) {
          console.error(err.message);
        } else {
          rows.forEach((row) => {
            console.log(`Tâche: ID ${row.id}, Titre: ${row.title}, Date: ${row.date}`);
          });
        }
      }
    );
  }
  // Filtrer les tâches en fonction du statut de complétion
function filterTaskByCompleted() {
    db.all(
      `SELECT * FROM task WHERE complete = ?`,
      [true],
      function (err, rows) {
        if (err) {
          console.error(err.message);
        } else {
          rows.forEach((row) => {
            console.log(`Tâche: ID ${row.id}, Titre: ${row.title}, Complétée: ${row.complete}`);
          });
        }
      }
    );
  }
    
  
module.exports={createTask,
  deleteTask,
  updateTask,
  getAllTasks,
  getTask,
  filterTaskByCompleted,
  filterTaskByDate
  //filterTaskByPriority
  ,completeTask,
  deleteTaskByFolder,
  //prioritizeTasks,
  getAllTaskFolder,
  getAllTaskCompleted,
  updateTaskDescription,
  NoncompleteTask,
  updateTaskPassword
}