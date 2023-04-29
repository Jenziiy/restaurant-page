export default function initializeWelcomePage(){
  document.querySelector('.pressed')?.classList.remove('pressed');
  const welcomeButton = document.getElementById('welcome');
  welcomeButton?.classList.add('pressed');
  const main = document.querySelector('main');
  main.innerHTML = 'Salut, nous vous accueillons chez notre resto! Nous preparons le poisson et cetra. à bientôt!';
  return main;
}