var canvas, contexto;

var frase = "SENA Virtual";

var anchoCelda = 100;
var altoCelda = 20;

var celdaLunes = {
	x:100,
	ancho:100,
	nombre: "Lunes"
	//al definir atributos del objero se debe dar valor a cada uno aquí
	//si no, entonces se van creando en la programación
};

var celdaMartes = {
	x:200,
	ancho:100,
	nombre: "Martes"
}

var celdaMiercoles = {
	x:300,
	ancho:100,
	nombre: "Miercoles"
}

var celdaJueves = {
	x:400,
	ancho:100,
	nombre: "Jueves"
}

var celdaViernes = {
	x:500,
	ancho:100,
	nombre: "Viernes"
}

var celdaSabado = {
	x:600,
	ancho:100,
	nombre: "Sabado"
}
var celdaDomingo = {
	x:700,
	ancho:100,
	nombre: "Domingo"
}

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var horas = ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00",
 "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00",
 "20:00", "21:00", "22:00", "23:00", "24:00" ];

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


	celdaLunes.y = inicioLunes * 20;
	celdaLunes.alto = (finLunes - inicioLunes) * 20;
	celdaLunes.horasDia = finLunes - inicioLunes;

	celdaMartes.y = inicioMartes * 20;
	celdaMartes.alto = (finMartes - inicioMartes) * 20;

	celdaMiercoles.y = inicioMiercoles * 20;
	celdaMiercoles.alto = (finMiercoles - inicioMiercoles) * 20;

	celdaJueves.y = inicioJueves * 20;
	celdaJueves.alto = (finJueves - inicioJueves) * 20;

	celdaViernes.y = inicioViernes * 20;
	celdaViernes.alto = (finViernes - inicioViernes) * 20;

	celdaSabado.y = inicioSabado * 20;
	celdaSabado.alto = (finSabado - inicioSabado) * 20;

	celdaDomingo.y = inicioDomingo * 20;
	celdaDomingo.alto = (finDomingo - inicioDomingo) * 20;

	document.write(tipoDocumento);
	document.write(documento);
	document.write(nombres);
	document.write(" "+apellidos);
	document.write(email);
	document.write(" Miércoles Desde las "+inicioMiercoles+" hasta las "+finMiercoles+ " ancho "+
		celdaMiercoles.ancho+" alto "+celdaMiercoles.alto);


		
}else{
	document.write("No hay nada");
}

}

function iniciarCanvas(){


if (celdaLunes.horasDia <= 0) {
	//Validar horas
compararHora(celdaLunes.nombre, celdaLunes.horasDia);

}else{


canvas = document.getElementById("grilla");
contexto = canvas.getContext("2d");


//Dibujando filas
for(i=1; i < 26; i++){
	dibujarCeldas(0, i);
	



}




//Dibujando Columnas
for(i=1; i <= 9; i++){
	dibujarCeldas(i, 0);

	// contexto.beginPath();
	// contexto.fillStyle="green";
	// contexto.font = "12px sans-serif";	
	// contexto.textBaseline = "middle";
	// contexto.fillText(dias[i-1], x, (y + 20));
	// contexto.closePath();

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


function escribirHoras(){

}


function definirCelda(x, y, ancho, alto){
	
	//alert("ingresó a definirCelda "+x+", "+y+", "+ancho+", "+alto);
	contexto.beginPath(); 	
	contexto.moveTo(x,y);
	contexto.fillStyle="green";
	contexto.fillRect(x,y,ancho, alto);		
	contexto.stroke;
	contexto.closePath();


	contexto.beginPath();
	contexto.fillStyle="white";
	contexto.font = "12px sans-serif";	
	contexto.textBaseline = "middle";
	contexto.fillText(frase, x, (y + 20));
	contexto.closePath();
	


}



 function compararHora(nombre, horasDia){
 	
 	 if (horasDia <= 0 ) {
 	 	
 	 	alert("La hora de cierre del "+ nombre + " es menor, vuelve a seleccionarla");
 	 	window.history.back();

 	 	//window.("ProyectoHorario.html", "_parent");


  }
 }


