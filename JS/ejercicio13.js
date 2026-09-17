function calc(){
        const num = parseFloat(document.getElementById('num').value);
        if(num>=18){
            const alerta = "Puede votar";
            document.getElementById("resultado").value=alerta;
        }else{
            const alerta = "No puede votar";
            document.getElementById("resultado").value=alerta;
        }
        
    }
