// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(valor){
  if(!!valor){
    console.log("É truthy");
  }else{
    console.log("Não é truthy");
  }
}
verificaTruthy(12);
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado1, lado2, lado3, lado4){
  var soma = lado1 + lado2 + lado3 + lado4;
  return soma;
}
console.log(perimetro(10, 20, 10, 20));
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return nome + sobrenome;
}
console.log(nomeCompleto("Cássia", " Mariane"));
// Crie uma função que verifica se um número é par
function par(numero){
  var verifica = numero % 2;
  if(verifica === 0){
    console.log("É par");
  }else{
    console.log("É ímpar");
  }
}
par(2);
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDe(dado){
  return (typeof dado);
}
console.log(tipoDe(2));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log("Cássia Mariane");
});
// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
