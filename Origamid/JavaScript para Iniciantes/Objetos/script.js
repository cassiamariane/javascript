// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: 'Cássia',
  sobrenome: 'Mariane',
// Crie um método no objeto anterior, que mostre o seu nome completo
nomeCompleto(){
  console.log(`${this.nome} ${this.sobrenome}`);
}
}
console.log(dados.nomeCompleto());
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  carro.preco = 3000;
  console.log(carro.preco);
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  viuHomem(){
    console.log('Latiu');
  },
}
console.log(cachorro.viuHomem());