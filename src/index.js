import onInitialPageLoad from "./initial-page-load";
import initializeMenuPage from "./menu-page";
import "./style.css";
import initializeWelcomePage from "./welcome-page";

function navigateToPage(page){
  document.body.appendChild(page);
}

function component() {
  const element = document.createElement('div');
  return element;
}
console.log('hallo');
// document.body.appendChild(component());


function Controller () {
// load Initial page
  document.body.appendChild(onInitialPageLoad());

// get navigational buttons
  const homeButton = document.getElementById('welcome');
  const menuButton = document.getElementById('menu');

// set event listeners for navigational buttons
  menuButton.addEventListener('click', () => navigateToPage(initializeMenuPage()));
  homeButton.addEventListener('click', () => navigateToPage(initializeWelcomePage()));
}