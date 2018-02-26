import { BrowserWindow } from 'electron';

import { getLocaleFilePath } from '../utils/file.utils';
import { IWindow } from './window.interface';

class MainWindow implements IWindow {

    private window: BrowserWindow | null = null;

    public launch = () => {
        this.window = new BrowserWindow({
            title: 'Hello'
        });
        const url = getLocaleFilePath('index.html');
        this.window.loadURL(url);
    }
}

export const mainWindow = new MainWindow();
