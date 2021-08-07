const { app, BrowserWindow } = require('electron');


app.on('ready', () => {
    console.log('app ready');
    const window = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    });

    window.loadFile('index.html')
})