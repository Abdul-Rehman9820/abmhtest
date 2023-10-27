const mysql = require('mysql2');

// Create and export a function to establish a MySQL connection
export const createMySQLConnection = () => {

  
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ABMH_DB'
  });

  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to the database:', err);
        reject(err);
        return;
      }
      console.log('Connected to the database!');
      resolve(connection);
    });
  });


};
