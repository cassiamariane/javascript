// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
  }
  
  //Ele está tentando imprimir uma palavra reservada e além disso o console log está fora do escopo onde se encontram esses dados.
  // Como corrigir o erro abaixo?
  const dois = 2;
  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x + dois;
  }
  somarDois(4);
  dividirDois(6);
  //Colocar a função dividirDois dentro da funçã somarDois para que ela tenha acesso a constante dois, ou declarar uma constante dois dentro da função dividirDois.
  // O que fazer para total retornar 500?
  var numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  //mudar de var par let para que não haja vazamento de bloco