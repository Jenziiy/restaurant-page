import onInitialPageLoad from "./initial-page-load";
import "./style.css";

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'tsup';

  return element;
}
console.log('hallo')
// document.body.appendChild(component());
document.body.appendChild(onInitialPageLoad());