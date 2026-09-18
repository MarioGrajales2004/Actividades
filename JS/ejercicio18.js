const ne = document.getElementById('ne');
const ba = document.getElementById('ba');
const ls = document.getElementById('ls');

function ae() {
    const t = ne.value.trim();
    
    if (t !== '') {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center mb-2 border rounded';
        
        const tn = document.createTextNode(t);
        li.appendChild(tn);

        const be = document.createElement('button');
        be.className = 'btn btn-danger btn-sm';
        be.textContent = 'Eliminar';
        
        be.onclick = function () {
            li.remove();
        };

        li.appendChild(be);
        ls.appendChild(li);
        
        ne.value = '';
    } else {
        alert('Escribe algo para agregar a la lista.');
    }
}

ba.onclick = ae;