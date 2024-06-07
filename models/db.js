const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'bo7f0tftrspuxuegd4kp-mysql.services.clever-cloud.com',
    user: 'utxzbvvlr1e3urev',
    password: 'waUwm5XmXsLIz6oXxfsB',
    database: 'bo7f0tftrspuxuegd4kp',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('MySQL Connected...');
});

module.exports = db;
