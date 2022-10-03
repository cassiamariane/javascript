// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 19;
var idadeParente = 39;

if(minhaIdade>idadeParente){
    console.log("É maior");
} else if(minhaIdade === idadeParente){
    console.log("É igual");
} else{
    console.log("É menor");
}
// Qual valor é retornado na seguinte expressão? 3
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome); //truthy
console.log(!!idade); //truthy
console.log(!!possuiDoutorado); //falsy
console.log(!!empregoFuturo); //falsy
console.log(!!dinheiroNaConta); //falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil>china){
  console.log("Brasil tem mais");
} else if(brasil === china){
  console.log("É igual");
} else{
  console.log("China tem mais");
}

// O que irá aparecer no console? Falso
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console? Cão
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}