// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
const distanciaPImg = primeiraImg.offsetTop;
console.log(distanciaPImg);

// Retorne a soma da largura de todas as imagens
function somaLargura(){
    const todasImg = document.querySelectorAll('img');
    let soma = 0;
    todasImg.forEach((img) => {
        soma += img.offsetWidth;
    });
    console.log(soma);
}

window.onload = function(){
    somaLargura();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
    const largura = link.offsetWidth;
    const altura = link.offsetHeight;
    if(largura >= 48 && altura >= 48){
        console.log("Possui");
    } else{
        console.log("Não possui");
    }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserMenor = window.matchMedia('(max-width: 720px)').matches;

if(browserMenor){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}