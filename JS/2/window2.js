let window2Container = document.getElementById('windowContainer2');
let win = null;

window2Container.addEventListener('click', e => {
    // Open a new browser tab
    if (e.target.id == 'oNWindow')
        win = window.open('https://youtube.com');

    // Resize a window (relative)
    if (e.target.id == 'resizeByBtn') {
        let wid = prompt("Enter the desired width");
        let hei = prompt("Enter the desired height");
        win.resizeBy(wid, hei);
    }

    // Resize a window (absolute)
    if (e.target.id == 'resizeToBtn') {
        let wid = prompt("Enter the desired width");
        let hei = prompt("Enter the desired height");
        win.resizeTo(wid, hei);
    }

    // Move the window (relative)
    if (e.target.id == 'moveByBtn') {
        let xm = prompt("Enter the px in X to move");
        let ym = prompt("Enter the px in Y to move");
        win.moveBy(xm, ym);
    }

    // Move the window (absolute)
    if (e.target.id == 'moveToBtn') {
        let xm = prompt("Enter the px in X to move");
        let ym = prompt("Enter the px in Y to move");
        win.moveTo(xm, ym);
    }
});