const { app, BrowserWindow, Menu, ipcMain } = require('electron');


app.on('ready', () => {
    console.log('app ready');
    const window = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false,
            devTools: true
        }
    });

    window.loadFile('index.html');

    const template = [
        {
            label: "Mis Opciones",
            submenu:[
                {
                    label:"Saludar",
                    click: () => window.webContents.send('showAlert',"Hola desde el main")
                },
                {
                    label:"tools",
                    role:"toggleDevTools"
                },
                {
                    label: "Salir",
                    role: "close"
                }
            ]
        }
    ]
    
    const menu = new Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
});

