const pool = require('../config/db');

const User = {
    findByUsername: (username) => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM authentication WHERE username = ?', [username], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    },
    // Add more user-related database functions as needed
};


module.exports = User;