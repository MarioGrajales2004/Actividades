function calcularArreglo() {
    const texto = document.getElementById('numeros').value;
    const at = texto.split(',');
    let an = [];
    
    for (let i = 0; i < at.length; i++) {
        an.push(parseFloat(at[i]));
    }

    let mayor = an[0];
    let menor = an[0];
    let suma = 0;

    for (let i = 0; i < an.length; i++) {
        if (an[i] > mayor) {
            mayor = an[i];
        }
        if (an[i] < menor) {
            menor = an[i];
        }
        suma += an[i];
    }

    const promedio = suma / an.length;

    document.getElementById('mayor').value = mayor;
    document.getElementById('menor').value = menor;
    document.getElementById('promedio').value = promedio;
}