'use trict';

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;


// �S�ẴE�B���h�E���������I��
app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// Electron�̏������������Ɏ��s
app.on('ready', function() {
    // ���C�����ʂ̕\���B�E�B���h�E�̕��A�������w���ł���
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    // �E�B���h�E�������ꂽ���A�v�����I��
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
