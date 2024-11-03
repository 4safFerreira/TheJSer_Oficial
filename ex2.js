var fahrenheit = 0;
var celsius = 0;
var resultado = 0;

function calctemp(){
    let valor = parseFloat(document.getElementById('valor').value);
    document.getElementById('valor').value="";
    document.getElementById('valor').focus();

    let temperatura = document.getElementById('temperatura').value;
    document.getElementById('valor').focus();
    
    if (temperatura === 'celsius'){
        fahrenheit = (valor*9/5) + 32;
        resultado = valor + " &deg;C &eacute; igual a " + fahrenheit + " &deg;F";
    }
    if (temperatura === 'fahrenheit'){
        celsius = (valor-32)*5/9;
        resultado = valor + " &deg;F &eacute; igual a " + celsius + " &deg;C";
    }
    if(temperatura === 'selecione'){
        resultado = alert('selecione uma medida')
    }
}

function exibir(){
    document.getElementById('resultado').innerHTML = resultado;
}

/* "Porque o Senhor é bom, e eterna a sua misericórdia; 
e a sua verdade dura de geração em geração." Salmo 100:5*/