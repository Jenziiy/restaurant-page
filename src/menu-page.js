import img from "./pizza.png";

export default function initializeMenuPage(){
  document.querySelector('.pressed')?.classList.remove('pressed');
  const menuButton = document.getElementById('menu');
  menuButton?.classList.add('pressed');
  const main = document.querySelector('main');
  main.innerHTML = 'hello here we have nice menu items, still working on it';
  const myIcon = new Image();
myIcon.src = img;
document.querySelector('img') ?? document.body.appendChild(myIcon);
  return main;
}