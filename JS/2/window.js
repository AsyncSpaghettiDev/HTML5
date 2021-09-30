let windowContainer = document.getElementById('windowContainer');
let url = 'https://youtube.com';
let nWindow = null;

windowContainer.addEventListener('click', e => {
    // Open a new browser tab
    if (e.target.id == 'oWindow')
        nWindow = window.open(url);

    // Close the opened browser tab
    if (e.target.id == 'cWindow')
        nWindow.close();

    // .closed indicates if the tab has been closed
    if (e.target.id == 'qWindow')
        alert(nWindow.closed);

    // Stops the load of the current page
    if (e.target.id == 'stopBtn')
        window.stop();

    // Deploys a rectangle with your message
    if (e.target.id == 'alertBtn')
        // window.alert("Your message here!") <- Old way
        alert("Hi, this is a message");

    // Executes the print dialog
    if (e.target.id == 'printBtn')
        print();

    // Executes a prompt were you can type data
    if (e.target.id == 'dataInput')
        // Optional: you can save the input in a variable
        prompt("Give me your current age");

    // Returns the anwers given by the users in a boolean
    // like the previous function you can save it in a variable too
    if (e.target.id == 'boolBtn')
        confirm("Just choose an option");
});