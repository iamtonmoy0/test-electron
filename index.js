const { app, BrowserWindow } = require("electron");
const path = require("node:path");

app.whenReady().then(() => {
  const appWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, "tanvir.png"),
    transparent: true,
  });

  appWindow.loadURL("https://hasanmahmud.online/");
});
