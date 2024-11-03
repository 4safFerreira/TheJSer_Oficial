var resultado = 0;

function calc(){
    let elemento1 = document.getElementById('elemento1').value;
    document.getElementById('elemento1').value="";
    document.getElementById('elemento1').focus();

    let elemento2 = document.getElementById('elemento2').value;
    document.getElementById('elemento2').value="";
    document.getElementById('elemento2').focus();

    let cation = document.getElementById('cat').value;
    document.getElementById('cat').value="";
    document.getElementById('cat').focus();

    let anion = document.getElementById('ann').value;
    document.getElementById('ann').value="";
    document.getElementById('ann').focus();

    let metalouametal = document.getElementById('metalouametal');
    let metalouametal2 = document.getElementById('metalouametal2');

    if (metalouametal === 'selecione'){
        resultado = alert('selecione metal ou ametal')
    }

    if(metalouametal2 === 'selecione'){
        resultado = alert('selecione metal ou ametal')
    }

    let divisao = cation/anion;

    if(divisao == 1){
        resultado = "F&oacute;rmula i&ocirc;nica: " + elemento1+elemento2+"(1:1).";
    } 
    if(cation>anion){
        resultado = "F&oacute;rmula i&ocirc;nica: " + elemento1+elemento2+"<sub>"+cation+"</sub>" + "(" +anion+":"+cation+").";
    }
    if(anion>cation){
        resultado = "F&oacute;rmula i&ocirc;nica: " + elemento1+"<sub>"+anion+"</sub>"+elemento2+ "(" +anion+":"+cation+").";
    }
}

function show(){
    document.getElementById('res').innerHTML = resultado;
}

// "Aguardo ao Senhor; a minha alma o aguarda, e espero na sua palavra." Salmo 130:5