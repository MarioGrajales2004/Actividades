function calc(){
        var num = document.getElementById("num").value;
        var resultado = (parseInt(num)*1.8)+32;
        document.getElementById("resultado").innerHTML =resultado + " Grados farenheit";
    }
