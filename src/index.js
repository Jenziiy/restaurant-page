import onInitialPageLoad from "./initial-page-load";
import initializeMenuPage from "./menu-page";
import "./style.css";
import initializeWelcomePage from "./welcome-page";
import img from "./pizza.png";

function navigateToPage(page){
  document.body.appendChild(page);
}

function component() {
  const element = document.createElement('div');
  return element;
}
console.log('hallo');
// document.body.appendChild(component());
document.body.appendChild(onInitialPageLoad());

const homeButton = document.getElementById('welcome');
const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => navigateToPage(initializeMenuPage()));
homeButton.addEventListener('click', () => navigateToPage(initializeWelcomePage()));