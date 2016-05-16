var canvas, contexto, botonImprimir;

var frase = "SENA Virtual";

var filas = 26;
var columnas = 9;
var anchoCalendario = 800;
var altoCalendario = 500;
var anchoCelda = anchoCalendario/(columnas-1);
var altoCelda = altoCalendario/(filas-1);


var celdaLunes = {
	x:anchoCelda*1,
	ancho:anchoCelda,
	nombre: "Lunes"
	//al definir atributos del objero se debe dar valor a cada uno aquí
	//si no, entonces se van creando en la programación
};

var celdaMartes = {
	x:anchoCelda*2,
	ancho:anchoCelda,
	nombre: "Martes"
}

var celdaMiercoles = {
	x:anchoCelda*3,
	ancho:anchoCelda,
	nombre: "Miercoles"
}

var celdaJueves = {
	x:anchoCelda*4,
	ancho:anchoCelda,
	nombre: "Jueves"
}

var celdaViernes = {
	x:anchoCelda*5,
	ancho:anchoCelda,
	nombre: "Viernes"
}

var celdaSabado = {
	x:anchoCelda*6,
	ancho:anchoCelda,
	nombre: "Sabado"
}
var celdaDomingo = {
	x:anchoCelda*7,
	ancho:anchoCelda,
	nombre: "Domingo"
}

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo", ""];
var horas = ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00",
 "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00",
 "20:00", "21:00", "22:00", "23:00", "24:00" ];
var horasInicio;
var horasFin;

// RECIBIENDO DATOS DESDE EL FORMULARIO
function recibirDatos(){

var paramstr = window.location.search.substr(1);
var paramarr = paramstr.split("&");
var params ={};

for(var i=0; i < paramarr.length; i++){
			var tmparr = paramarr[i].split("=");
			params[tmparr[0]] = tmparr[1];
}

//Recibir datos desde el formulario y depurarlos para mostrar

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

	var inicioMartes = decodeURIComponent(params['inicioMartes']);
	var finMartes = decodeURIComponent(params['finMartes']);

	var inicioMiercoles = decodeURIComponent(params['inicioMiercoles']);
	var finMiercoles = decodeURIComponent(params['finMiercoles']);

	var inicioJueves = decodeURIComponent(params['inicioJueves']);
	var finJueves = decodeURIComponent(params['finJueves']);

	var inicioViernes = decodeURIComponent(params['inicioViernes']);
	var finViernes = decodeURIComponent(params['finViernes']);

	var inicioSabado = decodeURIComponent(params['inicioSabado']);
	var finSabado = decodeURIComponent(params['finSabado']);

	var inicioDomingo = decodeURIComponent(params['inicioDomingo']);
	var finDomingo = decodeURIComponent(params['finDomingo']);


//Extraer valores numéricos de las cadenas de texto de los elementos tipo time
//Imagino que Se puede hacer más específico extrayendo el final de la cadena y concatenar con un punto "."
	inicioLunes = inicioLunes.substr(0, 2);
	finLunes = finLunes.substr(0, 2);	

	inicioMartes = inicioMartes.substr(0, 2);
	finMartes = finMartes.substr(0, 2);

	inicioMiercoles = inicioMiercoles.substr(0, 2);
	finMiercoles = finMiercoles.substr(0, 2);	

	inicioJueves = inicioJueves.substr(0, 2);
	finJueves = finJueves.substr(0, 2);

	inicioViernes = inicioViernes.substr(0, 2);
	finViernes = finViernes.substr(0, 2);	

	inicioSabado = inicioSabado.substr(0, 2);
	finSabado = finSabado.substr(0, 2);

	inicioDomingo = inicioDomingo.substr(0, 2);
	finDomingo = finDomingo.substr(0, 2);


//Definir las caracteristicas de las Celdas de cada día para poder rellenar en calendario


	celdaLunes.y = inicioLunes * altoCelda;
	celdaLunes.alto = (finLunes - inicioLunes) * altoCelda;
	celdaLunes.horasDia = finLunes - inicioLunes;

	celdaMartes.y = inicioMartes * altoCelda;
	celdaMartes.alto = (finMartes - inicioMartes) * altoCelda;

	celdaMiercoles.y = inicioMiercoles * altoCelda;
	celdaMiercoles.alto = (finMiercoles - inicioMiercoles) * altoCelda;

	celdaJueves.y = inicioJueves * altoCelda;
	celdaJueves.alto = (finJueves - inicioJueves) * altoCelda;

	celdaViernes.y = inicioViernes * altoCelda;
	celdaViernes.alto = (finViernes - inicioViernes) * altoCelda;

	celdaSabado.y = inicioSabado * altoCelda;
	celdaSabado.alto = (finSabado - inicioSabado) * altoCelda;

	celdaDomingo.y = inicioDomingo * altoCelda;
	celdaDomingo.alto = (finDomingo - inicioDomingo) * altoCelda;

horasInicio = [inicioLunes, inicioMartes, inicioMiercoles, inicioJueves, inicioViernes, 
inicioSabado, inicioDomingo];
horasFin = [finLunes, finMartes, finMiercoles, finJueves, finViernes, finSabado, finDomingo];

validarDatos();

	document.getElementById("nombreDefinido").innerHTML = "Horario Semanal de "+nombres+" "+apellidos;
	document.getElementById("correoDefinido").innerHTML = "Correo electrónico: "+email;
	document.getElementById("documentoDefinido").innerHTML = tipoDocumento+" Número "+documento;
	document.getElementById("fechaActual").innerHTML = "Fecha: " + Date();
	

		
}else{
	document.write("No hay nada");
}

}

function validarDatos(){
	for(i=0; i <= horasInicio.length; i++){		
		
		if (horasFin[i]-horasInicio[i]<0) {
			alert("La hora de cierre del "+ dias[i] + " es menor, vuelve a seleccionarla");
 	 	window.history.back();
		}
	}
}

function iniciarCanvas(){


canvas = document.getElementById("grilla");
contexto = canvas.getContext("2d");
botonImprimir = document.getElementById("botonImprimir");
botonImprimir.addEventListener("click", imprimirCalendario);




//Dibujando filas

for(i=1; i < filas; i++){
	dibujarCeldas(0, i);
}

//Dibujando Columnas
 
for(i=1; i <= columnas; i++){
	dibujarCeldas(i, 0);

}
//Definiendo el color de las celdas a través de la función definirCelda
definirCelda(celdaLunes.x, celdaLunes.y, celdaLunes.ancho, celdaLunes.alto);
definirCelda(celdaMartes.x, celdaMartes.y, celdaMartes.ancho, celdaMartes.alto);
definirCelda(celdaMiercoles.x, celdaMiercoles.y, celdaMiercoles.ancho, celdaMiercoles.alto);
definirCelda(celdaJueves.x, celdaJueves.y, celdaJueves.ancho, celdaJueves.alto);
definirCelda(celdaViernes.x, celdaViernes.y, celdaViernes.ancho, celdaViernes.alto);
definirCelda(celdaSabado.x, celdaSabado.y, celdaSabado.ancho, celdaSabado.alto);
definirCelda(celdaDomingo.x, celdaDomingo.y, celdaDomingo.ancho, celdaDomingo.alto);




}

function imprimirCalendario(){
		window.print();	
	}



function dibujarCeldas(x, y){

			

			
			contexto.moveTo(0, y * altoCelda);
			contexto.lineTo(anchoCalendario, y * altoCelda);
			contexto.stroke();
			contexto.strokeStyle = "#ff8a00";
			

			contexto.moveTo(x * anchoCelda, 0);
			contexto.lineTo(x * anchoCelda, altoCalendario);
			contexto.stroke;
			contexto.strokeStyle = "#ff8a00";

if (x > 0) {
//	contexto.beginPath();
	contexto.fillStyle="green";
	contexto.font = "bold 12px sans-serif";	
	contexto.textBaseline = "middle";
	contexto.fillText(dias[x-1], (x*anchoCelda)+altoCelda, 10);
//	contexto.closePath();
//	alert("Día: "+dias[y-1]);
			
}

if (y > 1) {
//	contexto.beginPath();
	contexto.fillStyle="green";
	contexto.font = "bold 12px sans-serif";	
	contexto.textBaseline = "middle";
	contexto.fillText(horas[y-2], 30, (y*altoCelda)-10);
//	contexto.closePath();
//	alert("Día: "+dias[y-1]);
			
}


}


function definirCelda(x, y, ancho, alto){
	
	//alert("ingresó a definirCelda "+x+", "+y+", "+ancho+", "+alto);
	contexto.beginPath(); 	
	contexto.moveTo(x,y);
	contexto.fillStyle="#55A900";
	contexto.fillRect(x,y,ancho, alto);		
	contexto.stroke;
	contexto.closePath();


	contexto.beginPath();
	contexto.fillStyle="white";
	contexto.font = "12px sans-serif";	
	contexto.textBaseline = "middle";
	contexto.fillText(frase, x + 10, (y + 10));
	// contexto.fillText(frase, x + 10, (y + altoCelda));
	contexto.closePath();
	


}


