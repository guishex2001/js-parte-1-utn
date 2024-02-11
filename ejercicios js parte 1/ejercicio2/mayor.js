function encontrarMayor(numeros) {
    let mayor = numeros[0]; // Suponemos que el primer número es el mayor inicialmente
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]; // Si encontramos un número mayor, lo asignamos como el nuevo mayor
        }
    }
    return mayor;
}

// Ejemplo de uso:
console.log(encontrarMayor([5, 8, 2, 15, 9]));   // Output: 15
console.log(encontrarMayor([-3, -7, -2, -1]));  // Output: -1
console.log(encontrarMayor([10, 10, 10, 10])); // Output: 10