var mtqds = 0;
var despesa = 0;

function calc(){
    let comp = parseFloat(document.getElementById('comp').value);
    let larg = parseFloat(document.getElementById('larg').value);
    document.getElementById('comp').value="";
    document.getElementById('larg').value="";
    document.getElementById('comp').focus();
    document.getElementById('larg').focus();

    mtqds = comp*larg;
    despesa = mtqds*36.00;
}

function show(){
    document.getElementById('mq').innerHTML = "Metros quadrados em seu c&ocirc;modo: "+mtqds + " m²";
    document.getElementById('desp').innerHTML = "Despesas: "+"R$ " + despesa;
}

/* "E tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor, e não aos homens,
Sabendo que recebereis do Senhor o galardão da herança, porque a Cristo, o Senhor, servis." Colossenses 3:23-24 */