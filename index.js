let nomeHeroi = 'Darwin';
let experienciaHeroi = 8000;
let experienciaAdquirida = 2345;
let contador = 0;
let nivelHeroi = '';

for (let i = 0; i < experienciaAdquirida; i++) {
    experienciaHeroi++;
    if(contador === i) {
        console.log('Upando...')
        contador += 500;
    }
}

console.log('Up finalizado.')
console.log(experienciaHeroi)

if (experienciaHeroi <= 1000){
    nivelHeroi = 'Nível Ferro';
} else if (experienciaHeroi > 1000 && experienciaHeroi <= 2000) {
    nivelHeroi = 'Nível Bronze';
} else if (experienciaHeroi > 2000 && experienciaHeroi <= 5000){
    nivelHeroi = 'Nível Prata';
} else if (experienciaHeroi > 5000 && experienciaHeroi <= 7000){
    nivelHeroi = 'Nível Ouro';
} else if (experienciaHeroi > 7000 && experienciaHeroi <= 8000){
    nivelHeroi = 'Nível Platina';
} else if (experienciaHeroi > 8000 && experienciaHeroi <= 9000){
    nivelHeroi = 'Nível Ascendente';
} else if (experienciaHeroi > 9000 && experienciaHeroi <= 10000){
    nivelHeroi = 'Nível Imortal';
} else if (experienciaHeroi > 10000){
    nivelHeroi = 'Nível Radiante';
} else {
    console.log('Herói sem experiência');
}

console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivelHeroi + '!');