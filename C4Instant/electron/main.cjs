const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1480,
    height: 920,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  win.loadFile('dist/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      ipcMain.handle('ping', () => 'pong')
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})