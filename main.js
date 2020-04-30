const {app,BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
let win;
app.on('ready',function()
{
    win = new BrowserWindow({
      height:500,
      width:500,
      icon:'icon.png',
  
    });
    win.loadURL(url.format(
        {
          pathname:'window.htm',
          protocol:'file:',
          slashes:true
        }
      
    ));
    win.setMenuBarVisibility(false);
})

