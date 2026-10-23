const { app, BrowserWindow } = require("electron");
const path = require("node:path");

app.whenReady().then(() => {
  const appWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    transparent: true,
    icon: path.join(__dirname, "tanvir.png"),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  appWindow.loadURL("https://hasanmahmud.online/");
});
