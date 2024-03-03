import { app, BrowserWindow } from "electron";
import {startingDevServer} from "./utils/DevUtils";

const development = true;
const createWindow = async () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    if (development){
        win.loadURL('http://127.0.0.1:' + await startingDevServer()).then(() => {
            console.log("[electron] starting development")
        });
    } else {
        win.loadFile('index.html').then(() => {
            console.log("[electron] starting")
        });
    }
}

app.whenReady().then(() => {
    createWindow().then(r => {
        console.log("[electron] running")
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow().then(r => {
                console.log("[electron] running")
            })
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})