var res = 0;

function calc(){
    let metal = parseFloat(document.getElementById('metal').value);
    let ametal = parseFloat(document.getElementById('ametal').value);

    document.getElementById('metal').value="";
    document.getElementById('ametal').value="";

    document.getElementById('metal').focus();
    document.getElementById('ametal').focus();

    let liga = metal+ametal;

    if(liga == 100){
        if(ametal < metal){
            res = "A liga &eacute; predominantemente met&aacute;lica";
        } 
        if(metal < ametal){
            res = "A liga &eacute; predominantemente amet&aacute;lica";
        }
        if(metal == ametal){
            res = "A liga est&aacute; totalmente equilibrada";
        }
    } 
    if(liga < 100){
        alert('A liga é menor que 100%');
    }
    if(liga > 100){
        alert('a liga é maior que 100%');
    }
}

function show(){
    document.getElementById('res').innerHTML = res;
}