const db = require('./models/db');

const createUsersTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE
        )
    `;
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error creating table:', err);
        } else {
            console.log('Users table created successfully.');
        }
    });
};

// Call the function to create the table
createUsersTable();
