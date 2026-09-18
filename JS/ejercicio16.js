const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0) ? (a / b) : 'Error';

function calcularOperacion(operacion) {
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(n1) || isNaN(n2)) {
        Swal.fire('Error', 'Ingresa números válidos', 'error');
        return;
    }

    let resultadoFinal;

    if (operacion === 'suma') {
        resultadoFinal = sumar(n1, n2);
    } 
    else if (operacion === 'resta') {
        resultadoFinal = restar(n1, n2);
    } 
    else if (operacion === 'multiplicacion') {
        resultadoFinal = multiplicar(n1, n2);
    } 
    else if (operacion === 'division') {
        resultadoFinal = dividir(n1, n2);
        
        if (resultadoFinal === 'Error') {
            Swal.fire('Error', 'No se puede dividir entre cero', 'error');
            return; 
        }
    }

    document.getElementById('resultado').value = resultadoFinal;
}