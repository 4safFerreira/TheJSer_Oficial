var lista = [];
var odd = []; 
var even = [];
var sum = 0;


function inserir() {
    let valor = document.getElementById('valor').value;
    lista.push(valor);
    document.getElementById('valor').value="";
    document.getElementById('valor').focus();
    sum += parseInt(valor);
    let resto = valor %2;
    switch (resto){
        case 0:
            even.push(valor);
        break;
        case 1:
            odd.push(valor);
        break;
        default:
            alert('É, meu nêga, deu ruim');
    }
    let tamanho = lista.length;
    mediatotal = sum/tamanho;
}


function exibir(){
    document.getElementById('res').innerHTML = "Aqui est&aacute; a sua lista:     " +"<b>"+ lista+"</b>";
}

function soma(){
    document.getElementById('somando').innerHTML = "Aqui est&aacute; a soma de todos os elementos:    "+"<b>"+sum+"</b>";
}

function media(){
    document.getElementById('totalmedia').innerHTML = "Aqui est&aacute; a m&eacute;dia de todos os elementos:    "+"<b>"+mediatotal+"</b>";
}

function imparpar(){
    document.getElementById('par').innerHTML = "Aqui est&atilde;o os n&uacute;meros pares:    "+"<b>"+even+"</b>";
    document.getElementById('impar').innerHTML = "Aqui est&atilde;o os n&uacute;meros &iacute;mpares:    "+"<b>"+odd+"</b>";
}

/* "Vinde a mim, todos os que estais cansados e oprimidos,
e Eu vos aliviarei. Tomai sobre v�s o meu jugo, e aprendei de mim, 
que sou manso e humilde de cora��o; e encontrareis descanso a vossas
almas. Porque meu jugo � suave, e o meu fardo � leve." Mt 11:28-30 */