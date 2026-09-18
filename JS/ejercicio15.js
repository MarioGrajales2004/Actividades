let estudiantes = [];

function agregarEstudiante() {
    let nombre = document.getElementById('nombre').value;
    let calificacion = parseFloat(document.getElementById('calificacion').value);

    if (nombre === "" || isNaN(calificacion)) {
        alert("Por favor, ingresa datos válidos.");
        return; 
    }

    let nuevoEstudiante = { nombre: nombre, calificacion: calificacion };
    estudiantes.push(nuevoEstudiante);

    document.getElementById('nombre').value = "";
    document.getElementById('calificacion').value = "";
}

function calcular() {
    if (estudiantes.length === 0) return;

    let suma = estudiantes.reduce(function(total, est) {
        return total + est.calificacion;
    }, 0);
    let promedio = suma / estudiantes.length;

    let listaCalificaciones = estudiantes.map(function(est) {
        return est.calificacion;
    });

    let notaMayor = Math.max(...listaCalificaciones);
    let notaMenor = Math.min(...listaCalificaciones);
    let mejor = estudiantes.find(function(est) {
        return est.calificacion === notaMayor;
    });
    
    let peor = estudiantes.find(function(est) {
        return est.calificacion === notaMenor;
    });

    document.getElementById('promedio').value = promedio;
    document.getElementById('mejor').value = mejor.nombre;
    document.getElementById('peor').value = peor.nombre;
}