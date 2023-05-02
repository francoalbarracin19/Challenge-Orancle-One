
function encriptar() {
    
var texto = document.getElementById("inputTxt").value.toLowerCase();
     
var txtCifrado = texto.replace(/e/igm,"enter");
var txtCifrado = txtCifrado.replace(/o/igm,"ober");
var txtCifrado = txtCifrado.replace(/i/igm,"imes");
var txtCifrado = txtCifrado.replace(/a/igm,"ai");
var txtCifrado = txtCifrado.replace(/u/igm,"ufat");
    
    
document.getElementById("img").style.display = "none";
document.getElementById("mensajeNoTxt").style.display = "none";
document.getElementById("retornaTxt").innerHTML = txtCifrado; 
document.getElementById("copiar").style.display = "inherit";
  
}
    
    
              
function desencriptor() {
        
        var texto = document.getElementById("inputTxt").value.toLowerCase();

        var txtCifrado = texto.replace(/enter/igm,"e");
        var txtCifrado = txtCifrado.replace(/ober/igm,"o");
        var txtCifrado = txtCifrado.replace(/imes/igm,"i");
        var txtCifrado = txtCifrado.replace(/ai/igm,"a");
        var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
           
        document.getElementById("img").style.display = "none";
        document.getElementById("mensajeNoTxt").style.display = "none";
        document.getElementById("retornaTxt").innerHTML = txtCifrado; 
        document.getElementById("copiar").style.display = "inherit";
     
}
       
       
    

function copiar() {
    var contenido = document.getElementById("retornaTxt");
        contenido.select();
    document.execCommand("copy");
    alert("copiado")
}
    
    