const os = require("os")
const {
    getColorHexRGB,
    darwinGetScreenPermissionGranted,
    darwinRequestScreenPermissionPopup
} = require('electron-color-picker')

const isDarwin = os.platform === 'darwin';

const colorpicker = async () => {
    try {
        utools.hideMainWindow();
        utools.setExpendHeight(60);
        if (isDarwin) {
            const permission = await darwinGetScreenPermissionGranted();
            if (!permission) {
                return darwinRequestScreenPermissionPopup();
            }
        }
        const result = await getColorHexRGB();

        if (result) {
            utools.copyText(result);
            utools.showNotification(`${result}, 取色成功！已复制剪切板`);
        }

        // utools.removePlugin();
        utools.outPlugin()
    } catch (e) {
        console.log(e);
    }
}



window.exports = {
    'pick': {
        mode: 'none',
        args: {
            enter: (action) => {
                colorpicker()
                // window.utools.hideMainWindow()
                // utools.showNotification('hello')
                // window.utools.outPlugin()
            }
        }
    }
}


