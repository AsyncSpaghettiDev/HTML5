let btnHandler = document.getElementById('btnHandler');
let btnListener = document.getElementById('btnListener');

// Old way to add events to an element
btnHandler.onclick = () =>{
    alert("You clicked the 2nd button");
}

// New way to add events to an element
btnListener.addEventListener('click', (e) => {
    alert("You clicked the 3rd button");
});