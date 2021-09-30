let locationContainer = document.getElementById('locationContainer');

locationContainer.addEventListener('click', e => {
    // Get the current location of this file
    if (e.target.id == 'lctHref')
        alert(window.location.href);

    // Get the current hostname
    if (e.target.id == 'lctHostname')
        alert(window.location.hostname);

    // Get the current pathname or route
    if (e.target.id == 'lctPathname')
        alert(window.location.pathname);

    // Get the protocol used
    if (e.target.id == 'lctProtocol')
        alert(window.location.protocol);
});