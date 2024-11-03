var desp = 0;
var litros = 0;

function add(){
    let kmp = parseFloat(document.getElementById('km').value);
    let combusta = parseFloat(document.getElementById('combustaprize').value);
    document.getElementById('km').value="";
    document.getElementById('combustaprize').value="";
    document.getElementById('km').focus();
    document.getElementById('combustaprize').focus();

    litros = kmp/8;
    desp = litros*combusta;
}

function show(){
    document.getElementById('lit').innerHTML = "Litros Gastos: "+litros;
    document.getElementById('despesa').innerHTML = "Despesa total: "+desp;
}

//"Louvai ao SENHOR, porque ele é bom; porque a sua benignidade dura para sempre." Salmo 136:1