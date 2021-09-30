let screenContainer = document.getElementById('screenContainer');

screenContainer.addEventListener('click', e => {
    // Show screen propierties in console
    if (e.target.id == 'screenProperties')
        console.log(screen);

    // ScreenLeft and ScreenTop are readOnly properties
    // Show the left margin of the window relative to screen
    if (e.target.id == 'screenLeft')
        console.log(screenLeft);

    // Show the top margin of the window relative to screen
    if (e.target.id == 'screenTop')
        console.log(screenTop);
});