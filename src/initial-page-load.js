export default function onInitialPageLoad(){
  const element = document.createElement('div');

  const header = document.createElement('header');
  header.innerHTML = '<h1> RESTAURANT LOS GATOS </h1>';

  const nav = document.createElement('nav');
  nav.innerHTML = '<ul> <li>Accueil</li> <li>Découvrez LOS GATOS</li> <li>Menu</li> </ul>';

  const main = document.createElement('main');
  main.innerHTML = 'Salut, nous vous accueillons chez notre resto! Nous preparons le poisson et cetra. à bientôt!';

  element.appendChild(header);
  element.appendChild(nav);
  element.appendChild(main);

  return element;
}
