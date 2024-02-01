console.log('Hello World')
function add(num1, num2){
    return num1+num2;
}

console.log(add(3,4))
let selectedContinent = '';

let userFirstname = "John";
let userlastname = "Jackson"
let email = "ojack@omail.com"
let Loc = "America"

let quantity = 0;
let startMenu = document.querySelector('.startMenu');
let startTextHeading = document.querySelector('.startTextHeading');
let weatherCard = document.getElementById('.weatherCard')

let pagemenu = document.querySelector('.pagemenu');
let MediaMenu = document.querySelector('.MediaMenu');
let menuMenu = document.querySelector('.menuMenu');
let profileSettings = document.querySelector('.profileSettings')
let nameInput = document.querySelector('.nameInput')
let emailInput = document.querySelector('.emailInput')
let lastnameInput = document.querySelector('.lastInput')
let locInput = document.querySelector('.locInput')
let fullUserName = document.querySelector('.username')
let emailText = document.querySelector('.email')
let continentOnDisplay = document.querySelector('.continent')

const user = {
    username : "Jack",
    age : 28

};





function clickingStart() {
    console.log("function started");


    if (startMenu.style.top === "-600px") {
        startMenu.style.top = "40px";
        startTextHeading.innerHTML = "Hello " + userFirstname;

        // Add a check to see if the menu is already open
        if (pagemenu.style.top !== "-600px") {
            pagemenu.style.top = "-600px";
        }
    } else {
        startMenu.style.top = "-600px";
    }
}


function greetText(){
    return
}

function clickingPage() {


    console.log("function started");

  

    if (pagemenu.style.top === "-600px") {
       pagemenu.style.top = "40px";

      
    }

    else{
        pagemenu.style.top = "-600px";
    }
}

function clickingMedia() {

    console.log("function started")
    if (MediaMenu.style.top === "-600px") {
        MediaMenu.style.top = "40px";

       
    }

    else{
        MediaMenu.style.top = "-600px";
    }
}

function clickingMenu() {

    console.log("function started")
    if (menuMenu.style.top === "-600px") {
        menuMenu.style.top = "40px";

       
    }

    else{
        menuMenu.style.top = "-600px";
    }
}

function clickProfile(){

    if (profileSettings.style.top === '-600px') {
        profileSettings.style.top = "50%";
        

    } else {
        profileSettings.style.top = '-600px';
    }
}

function getInfo() {

    
    userFirstname = nameInput.value;
    console.log(userFirstname);

    userlastname = lastnameInput.value;
    console.log(userlastname);

    email = emailInput.value;
    console.log(email);

    
    console.log(selectedContinent);

    setContinent();

    fullUserName.innerHTML = userFirstname+" "+userlastname;
    emailText.innerHTML = email;

}

document.addEventListener('DOMContentLoaded', function () {
    const continentInput = document.getElementById('continentInput');
    const continentList = document.getElementById('continentList');

    // Declare a global variable to store the selected continent
   

    // Show/hide dropdown on input click
    continentInput.addEventListener('click', function () {
        continentList.style.display = continentList.style.display === 'block' ? 'none' : 'block';
    });

    // Handle selection of continent
    continentList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            selectedContinent = event.target.textContent;
            continentInput.value = selectedContinent;
            continentList.style.display = 'none';

            // Log the selected continent to the console (you can do more with it)
            console.log(`Selected Continent: ${selectedContinent}`);
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.custom-dropdown')) {
            continentList.style.display = 'none';
        }
    });

    // Now, you can use the selectedContinent variable anywhere in your code.
    // For example, you can pass it to a function or send it to a server.
});


function setContinent() {
    switch (selectedContinent) {
        case 'Africa':
            continentOnDisplay.innerHTML = 'AFR';
            break;
        case 'Asia':
            continentOnDisplay.innerHTML = 'ASA';
            break;
        case 'Europe':
            continentOnDisplay.innerHTML = 'EUR';
            break;
        case 'North America':
            continentOnDisplay.innerHTML = 'NAM';
            break;
        case 'Oceania':
            continentOnDisplay.innerHTML = 'OCE';
            break;
        case 'South America':
            continentOnDisplay.innerHTML = 'SAM';
            break;
        default:
            continentOnDisplay.innerHTML = '';
    }
}

