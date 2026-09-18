const mt = (function () {
    function ot() {
        const tg = localStorage.getItem('t');
        return tg ? JSON.parse(tg) : [];
    }

    function gt(t) {
        localStorage.setItem('t', JSON.stringify(t));
    }

    return {
        o: function () {
            return ot();
        },
        a: function (n) {
            const t = ot();
            t.push({ id: Date.now(), n: n });
            gt(t);
        },
        e: function (id) {
            let t = ot();
            t = t.filter(x => x.id !== id);
            gt(t);
        }
    };
})();

const it = document.getElementById('it');
const ba = document.getElementById('ba');
const lt = document.getElementById('lt');

function rt() {
    lt.innerHTML = '';
    const t = mt.o();

    t.forEach(x => {
        const li = document.createElement('li');
        li.textContent = x.n + " ";

        const be = document.createElement('button');
        be.textContent = 'Eliminar';
        
        be.onclick = function () {
            mt.e(x.id);
            rt();
        };

        li.appendChild(be);
        lt.appendChild(li);
    });
}

ba.onclick = function () {
    const v = it.value.trim();
    if (v !== '') {
        mt.a(v);
        it.value = '';
        rt();
    }
};

rt();