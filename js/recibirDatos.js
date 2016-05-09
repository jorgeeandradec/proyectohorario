var canvas, contexto;

var anchoCelda = 100;
var altoCelda = 20;

var celdaLunes = {
	x:100,
	ancho:100
	//al definir atributos del objero se debe dar valor a cada uno aquí
	//si no, entonces se van creando en la programación
};

var celdaMartes = {
	x:200,
	ancho:100
}

// RECIBIENDO DATOS DESDE EL FORMULARIO
function recibirDatos(){

var paramstr = window.location.search.substr(1);
var paramarr = paramstr.split("&");
var params ={};

for(var i=0; i < paramarr.length; i++){
			var tmparr = paramarr[i].split("=");
			params[tmparr[0]] = tmparr[1];
}

if(params['documento']){
	var tipoDocumento = decodeURIComponent(params['tipoDocumento']);
	tipoDocumento = tipoDocumento.replace(/[+]/g, ' ');
	var documento = params['documento'];
	var nombres = decodeURIComponent(params['nombres']);
	nombres = nombres.replace('+',' ');
	var apellidos = decodeURIComponent(params['apellidos']);
	apellidos = apellidos.replace('+', " ");
	var email = decodeURIComponent(params['email']);
	
	var inicioLunes = decodeURIComponent(params['inicioLunes']);
	var finLunes = decodeURIComponent(params['finLunes']);

	inicioLunes = inicioLunes.substr(0, 2);
	finLunes = finLunes.substr(0, 2);

	var inicioMartes = decodeURIComponent(params['inicioMartes']);
	var finMartes = decodeURIComponent(params['finMartes']);

	inicioLunes = inicioLunes.substr(0, 2);
	finLunes = finLunes.substr(0, 2);

	inicioMartes = inicioMartes.substr(0, 2);
	finMartes = finMartes.substr(0, 2);

	celdaLunes.y = inicioLunes * 20;
	celdaLunes.alto = (finLunes - inicioLunes) * 20;

	celdaMartes.y = inicioMartes * 20;
	celdaMartes.alto = (finMartes - inicioMartes) * 20;

	document.write(tipoDocumento);
	document.write(documento);
	document.write(nombres);
	document.write(" "+apellidos);
	document.write(email);
	document.write(" Desde las "+inicioLunes+" hasta las "+finLunes);


		
}else{
	document.write("No hay nada");
}

}

function iniciarCanvas(){


canvas = document.getElementById("grilla");
contexto = canvas.getContext("2d");

for(i=1; i < 25; i++){
	dibujarCeldas(0, i);
}

for(i=1; i <= 8; i++){
	dibujarCeldas(i, 0);
}

definirCelda(celdaLunes.x, celdaLunes.y, celdaLunes.ancho, celdaLunes.alto);
definirCelda(celdaMartes.x, celdaMartes.y, celdaMartes.ancho, celdaMartes.alto);


}

function dibujarCeldas(x, y){			

			contexto.moveTo(0, y * 20);
			contexto.lineTo(800, y * 20);
			contexto.stroke();
			contexto.strokeStyle = "#cc0000";
			

			contexto.moveTo(x * 100, 0);
			contexto.lineTo(x * 100, 500);
			contexto.stroke;
			contexto.strokeStyle = "#cc0000";
			
}

function definirCelda(x, y, ancho, alto){
	
	alert("ingresó a definirCelda "+x+", "+y+", "+ancho+", "+alto);
 	
	contexto.moveTo(x,y);
	contexto.fillStyle="green";
	contexto.fillRect(x,y,ancho, alto);
	contexto.stroke;
	



}


