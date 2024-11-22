function podeAcessar(usuario) {
    return ((usuario.idade > 18 || usuario.isAdmin) && !usuario.isBlocked);
}

// Testando a função
console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));  // false
console.log(podeAcessar({ idade: 17, isAdmin: false, isBlocked: false })); // false
console.log(podeAcessar({ idade: 25, isAdmin: true, isBlocked: false })); // true
