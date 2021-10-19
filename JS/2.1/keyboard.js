let keyEvents = document.getElementById('keyEvents');

// Occurs when you press/hold a key
keyEvents.addEventListener('keydown', e => {
    console.log(e.key);
});

// Occurs whe you press and release in the same element
keyEvents.addEventListener('keypress', e => {
    console.log(e.key);
});

// Occurs when you release the key pressed, doesn't matter if
// when you pressed it you were at another element
keyEvents.addEventListener('keyup', e => {
    console.log(e.key);
});