const mysql = require('mysql2');

// Replace with your InfinityFree MySQL credentials
const connection = mysql.createConnection({
    host: 'localhost',    // Your MySQL host
    user: 'root',               // Your MySQL username
    password: '74269',             // Your MySQL password
    database: 'user_accounts',       // Your MySQL database name
    port: 3306                          // Default MySQL port
});

// Connect to MySQL
connection.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

module.exports = connection;
