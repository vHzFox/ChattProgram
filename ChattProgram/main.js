const { app, BrowserWindow, ipcMain } = require('electron');
const connection = require('./db.js');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html');
});

ipcMain.on('create-account', (event, data) => {
    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    connection.query(sql, [data.username, data.password], (err, result) => {
        if (err) {
            console.error('Error creating account:', err);
            return;
        }
        console.log('Account created successfully!');
    });
});
