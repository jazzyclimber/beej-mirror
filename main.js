//create window
const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow () {
  let mainWindow = new BrowserWindow({titleBarAppearsTransparent: true, fullscreen: true, darkTheme: true, }); //define the presets for mainWindow
  mainWindow.show()//show mainWindow

  //open devTools
  mainWindow.openDevTools()

//load the index.html file into the window
  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    //Terminate the window on closed
    mainWindow = null
  })
}

app.on('ready', createWindow)

//quit when all windows are closed
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function (){
  if (mainWindow === null) {
    createWindow()
  }
})
