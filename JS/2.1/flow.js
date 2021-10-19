let mainContainer = document.getElementById('main');
let flowContainer = document.getElementById('flow');
let btnEv = document.getElementById('clickEv');
let btnRe = document.getElementById('removeEv');

// The flow of the events goes from the most specific to the least
// You can put a e.stopPropagation to stop the execution of the next events
// if you add a true after the curly brackets it will put that event at
// the top of the hierarchy.
mainContainer.addEventListener('click', e => {
    alert("You clicked main div");
    // e.stopPropagation
});

flowContainer.addEventListener('click', e =>{
    alert("You click second div");
    // e.stopPropagation
});

btnEv.addEventListener('click', e => {
    alert("You click me");
    // e.stopPropagation
});

// Simple way to add and then remove the event listener
btnRe.addEventListener('click',greet);
function greet(){
    alert("Hi");
    btnRe.removeEventListener('click', greet);
}