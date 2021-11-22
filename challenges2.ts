// Desafio 10*
function techList(tech:string[], name:string):string | object {
  if (tech.length === 0) {
    return 'Vazio!';
  } else {
    let arrayTech = [];
    for (let index in tech.sort()) {
      let tecnologias = {
        tech: tech[index],
        name: name
      };
      arrayTech.push(tecnologias);
    }
    return arrayTech;
  }
}

// Desafio 11*
function generatePhoneNumber(arrayNumbers:number[]):any {
  let numeroCorreto = true;
  let numero;
  if (arrayNumbers.length === 11) {
    for (let index = 0; index < arrayNumbers.length; index += 1) {
      let count = 0;
      numero = arrayNumbers[index];
      for (let number of arrayNumbers) {
        if (number === arrayNumbers[index]) {
          count += 1;
        }
      }
      if (arrayNumbers[index] > 9 || arrayNumbers[index] < 0 || count >= 3) {
        numeroCorreto = false;
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } else {
    numeroCorreto = false;
    return 'Array com tamanho incorreto.';
  }
  if (numeroCorreto === true) {
    let numeroFinal = '(';
    for (let indice = 0; indice < 11; indice += 1) {
      numeroFinal = numeroFinal + arrayNumbers[indice];
        if (indice === 1) {
        numeroFinal = numeroFinal + ') ';
      } else if (indice === 6) {
        numeroFinal = numeroFinal + '-';
      }
    }
    return numeroFinal;
  }
}

// Desafio 12
function triangleCheck(lineA:number, lineB:number, lineC:number):boolean {
  if (
    Math.abs(lineA + lineB) > lineC 
    && Math.abs(lineB + lineC) > lineA 
    && Math.abs(lineC + lineB) > lineA 
    && Math.abs(lineA - lineB) < lineC 
    && Math.abs(lineB - lineC) < lineA 
    && Math.abs(lineC - lineB) < lineA
  ) 
    return true;
  return false; 
}

// Desafio 13
function hydrate(pedidos:any):string {
  let soma = 0;
  pedidos = pedidos.toString().split('');
  for (let pedido of pedidos) {
    pedido = parseInt(pedido, 0) || 0;
    soma = soma + pedido;
  }

  return soma === 1 ? `${soma} copo de água` : `${soma} copos de água`;
  
}

export = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
