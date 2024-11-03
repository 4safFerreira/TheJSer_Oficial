lista = [];
greathanmedia = [];
minorthanzero = [];
var sum = 0;


for(i=0; i<=10; i++){
    function adicionando(){
        let valor = document.getElementById('valores').value;
        lista.push(valor);
        document.getElementById('valores').value="";
        document.getElementById('valores').focus();
        sum += parseInt(valor);
        tamanho = lista.length;
        if(tamanho == 10){
            alert("Lista no limite de números (tu tá maluco, mermão?)");
        }

        mediatotal = sum / tamanho;

        if (valor>mediatotal){
            greathanmedia.push(valor);
        }

        if (valor<0){
            minorthanzero.push(valor);
        }
    }
}


function show(){
    document.getElementById('show').innerHTML = lista;
}

function media(){
    document.getElementById('media').innerHTML = mediatotal;
}

function gtm(){
    document.getElementById('mqm').innerHTML = greathanmedia;
}

function btz(){
    document.getElementById('mqz').innerHTML = minorthanzero;
}

/* "E a vida eterna é esta: que te conheçam, a ti só, por único Deus verdadeiro,
 e a Jesus Cristo, a quem enviaste." João 17:3 */