const remote = require('electron').remote;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("min-btn").addEventListener("click", function (e) {
        var win = remote.getCurrentWindow();
        win.minimize();
    });

    document.getElementById("max-btn").addEventListener("click", function (e) {
        var win = remote.getCurrentWindow();
        if (!win.isMaximized()) {
            win.maximize();
        } else {
            win.unmaximize();
        }
    });

    document.getElementById("close-btn").addEventListener("click", function (e) {
        var win = remote.getCurrentWindow();
        win.close();
    });

    console.log("hello", document.getElementById("min-btn"), document.getElementById("max-btn"), document.getElementById("close-btn"));
});