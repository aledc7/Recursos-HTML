function apaga(){
document.getElementById('bombita').src='pic_bulboff.gif';
}


function enciende(){
document.getElementById('bombita').src='pic_bulbon.gif';
}

function textobig(){

	document.getElementById('titulo1').style.fontSize='40px';
}

function textosmall(){

	document.getElementById('titulo1').style.fontSize='30px';
}

function desaparece() {
	document.getElementById('bombita').style.display='none';
}

function aparece() {
	document.getElementById('bombita').style.display='block';
}

// 27/11/2017 -  Capitulo 13 - JS Functions

function multiplica(a,b) {
	return a * b; 
}


// aca pongo una funcion dentro de otra funcion.  o sea pongo la funcion "multiplica"
// dentro de la funcion "pone_en_texto"
// sé que los nombres de las funciones son horribles, ya lo vamos a ir corrigiendo de a poco.
function pone_en_texto(){
 document.getElementById('texto_multiplica').innerHTML = multiplica(14,5);
}





