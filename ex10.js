var res = 0;

function calc(){
    let e = parseFloat(document.getElementById('e').value);
    document.getElementById('e').value="";
    document.getElementById('e').focus();

    let x = parseFloat(document.getElementById('x').value);
    document.getElementById('x').value="";
    document.getElementById('x').focus();
    
    let y=e**x;

    res = "f("+x+")="+y;
}

function show(){
    document.getElementById('res').innerHTML = "Aqui est&aacute; o resultado: "+res;
}

//"Bendito seja o SENHOR, minha rocha, que ensina as minhas mãos para a peleja e os meus dedos para a guerra;" Salmo 144:1