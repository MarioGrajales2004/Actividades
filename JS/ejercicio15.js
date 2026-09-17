let e = [];

function agregarEstudiante() {
    const in_n = document.getElementById('nombre');
    const in_c = document.getElementById('calificacion');
    
    const n = in_n.value.trim();
    const c = parseFloat(in_c.value);

    if (n === "" || isNaN(c)) {
        alert("Por favor, ingresa un nombre y una calificación válida.");
        return; 
    }

    e.push({ nombre: n, calificacion: c });

    in_n.value = "";
    in_c.value = "";
    in_n.focus();
}

function calcular() {
    if (e.length === 0) {
        alert("Agrega al menos un estudiante antes de calcular.");
        return;
    }

    const s = e.reduce((t, x) => t + x.calificacion, 0);
    const p = s / e.length;

    const max = Math.max(...e.map(x => x.calificacion));
    const min = Math.min(...e.map(x => x.calificacion));

    const mej = e.find(x => x.calificacion === max);
    const peo = e.find(x => x.calificacion === min);

    document.getElementById('promedio').value = p.toFixed(2);
    document.getElementById('mejor').value = mej.nombre;
    document.getElementById('peor').value = peo.nombre;
}