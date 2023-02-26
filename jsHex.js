
function hexadecimal(){
    const writeColorTwo = document.querySelector('#writeColor');
    const body = document.querySelector('#colorChance');

    writeColorTwo.innerHTML = gerar_cor_hexadecimal();
    body.style.backgroundColor = gerar_cor_hexadecimal()
    
}

function gerar_cor_hexadecimal(){
    return '#' + parseInt((Math.random() * 0xFFFFFF))
      .toString(16)
      .padStart(6, '0');
  }