# Documentação de cada exercício - Aula 08


---

## *Questão 1*
```javascript
/**
 * Este código verificou se uma pessoa é menor ou maior de idade.
 * 
 * @example
 * verificarIdade(12); // "Menor de idade"
 * verificarIdade(43); // "Maior de idade"
 * 
 * @param {Number} idade - Idade da pessoa.
 * @returns {String} Retorna "Menor de idade" ou "Maior de idade".
 */
function verificarIdade(idade) {
    return idade < 18 ? "Menor de idade" : "Maior de idade";
}
```

## *Questão 2*
```javascript

/**
 * Este código retorna o nome do dia da semana com base em um número.
 * 
 * @example
 * definirDiaDaSemana(1); // "Domingo"
 * definirDiaDaSemana(5); // "Quinta-feira"
 * 
 * @param {Number} dia - Número representando o dia da semana (1 a 7).
 * @returns {String} Nome do dia da semana ou "Número inválido".
 */
function definirDiaDaSemana(dia) {
    switch (dia) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terça-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sábado";
        default: return "Número inválido";
    }
}
```


## *Questão 3*
```javascript

/**
 * Este código verifica se um número é par ou ímpar.
 * 
 * @example
 * parOuImpar(30); // "Par"
 * parOuImpar(11); // "Ímpar"
 * 
 * @param {Number} numero - Número a ser verificado.
 * @returns {String} Retorna "Par" ou "Ímpar".
 */
const parOuImpar = (numero) => numero % 2 === 0 ? "Par" : "Ímpar";
```

## **Questão 4**
```javascript
/**
 * Este código verifica se um usuário pode acessar o sistema.
 * 
 * @example
 * podeAcessar({ idade: 22, isAdmin: false, isBlocked: false }); // true
 * podeAcessar({ idade: 14, isAdmin: true, isBlocked: true });   // false
 * 
 * @param {Object} usuario - Objeto representando o usuário.
 * @param {Number} usuario.idade - Idade do usuário.
 * @param {Boolean} usuario.isAdmin - Indica se o usuário é administrador.
 * @param {Boolean} usuario.isBlocked - Indica se o usuário está bloqueado.
 * @returns {Boolean} Retorna `true` se o usuário puder acessar, caso contrário, `false`.
 */
function podeAcessar(usuario) {
    const { idade, isAdmin, isBlocked } = usuario;
    return (idade > 18 || isAdmin) && !isBlocked;
}
```

## *Questão 5*
```javascript
/**
 * Este código calcula o preço com desconto de um produto.
 * 
 * @example
 * calcularDesconto(100, 10); // 90
 * calcularDesconto(250, 20); // 200
 * 
 * @param {Number} precoOriginal - Preço original do produto.
 * @param {Number} porcentagemDesconto - Porcentagem de desconto a ser aplicada.
 * @returns {Number} Retorna o preço final após o desconto.
 */
const calcularDesconto = (precoOriginal, porcentagemDesconto) => 
    precoOriginal - (precoOriginal * porcentagemDesconto / 100);