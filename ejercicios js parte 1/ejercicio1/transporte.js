function medioTransporte(distancia) {
    if (distancia >= 0 && distancia <= 1000) {
        return "pie";
    } else if (distancia > 1000 && distancia <= 10000) {
        return "bicicleta";
    } else if (distancia > 10000 && distancia <= 30000) {
        return "colectivo";
    } else if (distancia > 30000 && distancia <= 100000) {
        return "auto";
    } else {
        return "avion";
    }
}

// Ejemplo de uso:
console.log(medioTransporte(500));   // Output: pie
console.log(medioTransporte(5000));  // Output: bicicleta
console.log(medioTransporte(20000)); // Output: colectivo
console.log(medioTransporte(70000)); // Output: auto
console.log(medioTransporte(200000));// Output: avion