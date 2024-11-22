const calcularDesconto = (precoOriginal, porcentagemDesconto) => {
    return precoOriginal - (precoOriginal * (porcentagemDesconto / 100));
};

console.log(calcularDesconto(100, 10));
console.log(calcularDesconto(250, 20));
