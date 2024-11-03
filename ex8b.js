var resultado = 0;

function calc(){
    let elemento1 = document.getElementById('elemento1').value;
    document.getElementById('elemento1').value="";
    document.getElementById('elemento1').focus();

    let elemento2 = document.getElementById('elemento2').value;
    document.getElementById('elemento2').value="";
    document.getElementById('elemento2').focus();

    let liga1 = document.getElementById('liga1').value;
    document.getElementById('liga1').value="";
    document.getElementById('liga1').focus();

    let liga2 = document.getElementById('liga2').value;
    document.getElementById('liga2').value="";
    document.getElementById('liga2').focus();


    if(liga2 == 1){
        resultado = "F&oacute;rmula molecular: "+elemento2+"<sub>"+liga1+"</sub>"+elemento1;
    } else if(liga1 == 1){
        resultado = "F&oacute;rmula molecular: "+elemento1+"<sub>"+liga2+"</sub>"+elemento2;
    } else {
        resultado = "F&oacute;rmula molecular: "+elemento2+"<sub>"+liga1+"</sub>"+elemento1+"<sub>"+liga2+"</sub>";
    }

}

function show(){
    document.getElementById('result').innerHTML = resultado;
}