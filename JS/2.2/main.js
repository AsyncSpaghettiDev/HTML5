/*
    Differences:
    setTimeout -> executes the given function 1 time after the specified "delay"
    setInterval -> executes the function n times after the specified "delay"
*/
setTimeout(() => {
    document.body.innerHTML += 'Hello World!';
}, 2000);

setInterval(() => {
    document.body.innerHTML += '<br>Hello World!';
}, 2000);

/*
    Both methods can be cleared o stoped when we put clear(Timeout or Interval without the parentesis).
    Note: we must save the timeout or interval in a variable
    const timmer1 = setTimeout(hello, 2000);
    clearTimeout(timmer1);
*/

// Note: isn't recommended used it as first option, because it uses a lot of memory.