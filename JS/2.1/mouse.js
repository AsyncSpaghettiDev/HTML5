let mouseEvents = document.getElementById('mouseEvents');
let mClickEvent = document.getElementById('clickBtn');
let mDblclickEvent = document.getElementById('dblclickBtn');

// Occurs when you click an element, can be any element not only buttons
mClickEvent.addEventListener('click',e => {
    alert("You clicked the button");
});
// These event can be decomposed into mousedown and mouseup

// Occurs when the time between 2 clicks is less than 500ms or 0.5s
mDblclickEvent.addEventListener('dblclick', e=> {
    alert("You double-clicked the button");
});

// Occurs when your mouse enters the element or one of its children.
// If you are using IE you can change it for mouseenter
/*
For easy work i'll comment it
mouseEvents.addEventListener('mouseover', e =>{
    alert("You have enter into restricted area");
});
*/

// Occurs when your mouse leaves the element or one of its children.
// If you are using IE you can change it for mouseleave
/*
For easy work i'll comment it
mouseEvents.addEventListener('mouseout', e =>{
    alert("You have leave restricted area");
});
*/

// Occurs when your click right button of your mouse to deploy context menu
/*
For easy work i'll comment it
mouseEvents.addEventListener('contextmenu', e =>{
    alert("You deploy contextmenu");
});
*/

// Occurs when you move the mouse into the element or one of its children
/*
For easy work i'll comment it
mouseEvents.addEventListener('mousemove', e =>{
    alert("You are moving the mouse");
});
*/