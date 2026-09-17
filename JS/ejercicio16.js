const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (op) => {
    const v1 = document.getElementById('numero1').value;
    const v2 = document.getElementById('numero2').value;
    
    const n1 = parseFloat(v1);
    const n2 = parseFloat(v2);

    if (isNaN(n1) || isNaN(n2)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese números válidos'
        });
        return;
    }

    let r;

    if (op === 'suma') {
        r = sumar(n1, n2);
    } else if (op === 'resta') {
        r = restar(n1, n2);
    } else if (op === 'multiplicacion') {
        r = multiplicar(n1, n2);
    } else if (op === 'division') {
        r = dividir(n1, n2);
        if (typeof r === 'string') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: r
            });
            return;
        }
    }

    document.getElementById('resultado').value = r;
};