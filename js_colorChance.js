 function gneratorColor() {
    const body = document.querySelector('#colorChance');
    const writeColor = document.querySelector('#writeColor')

    let arrays = [gerar_cor_hexadecimal(), gerar_cor_rgba(), gerar_cor_hsl()];
    const randItem = Math.random() * 2;
    const random_item = randItem.toFixed(0)

    body.style.backgroundColor = arrays[random_item];
    writeColor.innerHTML = arrays[random_item];

    console.log(random_item)
}

function gerar_cor_rgba(){
    let r = Math.random() * 255; // random gera um numero aleatorio de 0 a 1
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return `rgb(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)})`

}

function gerar_cor_hexadecimal(){
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}


function gerar_cor_hsl(){
    let h = Math.random() * 359;
    let s = Math.random() * 100;
    let l = Math.random() * 100;

    return `hsl(${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%)`
}
