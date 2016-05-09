
var canvas, contexto;

function iniciar(){


canvas = document.getElementById("grilla");
contexto = canvas.getContext("2d");

for(i=1; i < 25; i++){
	dibujar(0, i);
}

for(i=1; i <= 8; i++){
	dibujar(i, 0);
}

}

function dibujar(x, y){
	
			contexto.moveTo(0, y * 20);
			contexto.lineTo(800, y * 20);
			contexto.stroke();
			contexto.strokeStyle = "#cc0000";

			contexto.moveTo(x * 100, 0);
			contexto.lineTo(x * 100, 480);
			contexto.stroke;
			contexto.strokeStyle = "#cc0000";
}




