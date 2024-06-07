const db = require('../models/db');

exports.getAllUsers = (req, res) => {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.getUserById = (req, res) => {
    let sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.createUser = (req, res) => {
    let newUser = { name: req.body.name, email: req.body.email };
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, newUser, (err, result) => {
        if (err) throw err;
        res.send('User added...');
    });
};

exports.updateUser = (req, res) => {
    let updatedUser = { name: req.body.name, email: req.body.email };
    let sql = 'UPDATE users SET ? WHERE id = ?';
    db.query(sql, [updatedUser, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('User updated...');
    });
};

exports.deleteUser = (req, res) => {
    let sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send('User deleted...');
    });
};
