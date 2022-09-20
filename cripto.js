function getChave() {
  const chave = document.getElementById('chave').valueAsNumber;

  if (chave < 0) {
    document.getElementById('chave').value = '';
    alert('Apenas positivos');return;
  }
  return chave;
}

function encrypt() {
  const frase = document.getElementById('frase').value,
        chave = getChave();

  let fraseCifrada = '';
  
  for(let letra of frase) {
    let charCodeDeslocado = letra.toUpperCase().charCodeAt(0) + chave;
    
    if (letra == ' ') {
      fraseCifrada += ' ';
    } else {
      fraseCifrada += String.fromCharCode(charCodeDeslocado);
    }
  }

  document.getElementById('resultado').innerText = fraseCifrada;
}

function decrypt() {
  const chave = getChave();
  let fraseCifrada = document.getElementById('resultado').value;
  let frase = '';

  for (let letra of fraseCifrada){
    if (letra == ' ') {
      frase += ' ';
    } else {
      let charDeslocado = letra.toUpperCase().charCodeAt(0) - chave;
      frase += String.fromCharCode(charDeslocado);
    }
  }
  
  return frase;
}