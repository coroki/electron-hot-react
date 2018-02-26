import { app } from 'electron';

import { mainWindow } from './windows/main.window';

app.on('ready', mainWindow.launch);
