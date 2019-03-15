const { app, BrowserWindow } = require('electron')

let win 
const createWindow = () => {
    win = new BrowserWindow()
    win.loadURL('http://new.mrrjvip.com')
}

app.on('ready', createWindow)