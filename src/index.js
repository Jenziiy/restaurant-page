function component() {
  const element = document.createElement('div');
  element.innerHTML = 'tsup';

  return element;
}

document.body.appendChild(component());