var lista = [];
var maior = 0;
var menor = 0;

function inserir(){
    let valor = document.getElementById('lista').value;
    document.getElementById('lista').value="";
    document.getElementById('lista').focus();
    lista.push(valor);
    maior = Math.max(...lista);
    menor = Math.min(...lista);
}

function show(){
    document.getElementById('res').innerHTML = "Aqui est&aacute; a sua lista: "+lista;
    document.getElementById('maior').innerHTML = "Aqui est&aacute; o maior valor: "+maior;
    document.getElementById('menor').innerHTML = "Aqui est&aacute; o menor valor: "+menor;
}

//"A voz do Senhor clama � cidade e o que � s�bio ver� o teu nome..." Miqu�ias 6:9