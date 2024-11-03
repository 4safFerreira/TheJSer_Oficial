var fr = 0;
var far = 0;

function calc(){
    let m1 = parseFloat(document.getElementById('kgobj1').value);
    let m2 = parseFloat(document.getElementById('kgobj2').value);
    let a1 = parseFloat(document.getElementById('aceobj1').value);
    let a2 = parseFloat(document.getElementById('aceobj2').value);

    document.getElementById('kgobj1').value="";
    document.getElementById('kgobj2').value="";
    document.getElementById('aceobj1').value="";
    document.getElementById('aceobj2').value="";

    document.getElementById('kgobj1').focus();
    document.getElementById('kgobj2').focus();
    document.getElementById('aceobj1').focus();
    document.getElementById('aceobj2').focus();

    let ar = a1-a2
    fr = m1*ar;
    far = m1*a1;
}

function show(){
    document.getElementById('fr').innerHTML = "Aqui est&aacute; a For&ccedil;a Resultante: "+fr + " N";
    document.getElementById('acao_reacao').innerHTML = "Aqui est&aacute; a For&ccedil;a de A&ccedil;&atilde;o e Rea&ccedil;&atilde;o: "+far + " N";
}