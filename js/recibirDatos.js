
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
	


	document.write(tipoDocumento);
	document.write(documento);
	document.write(nombres);
	document.write(" "+apellidos);
	document.write(email);
	

		
}else{
	document.write("No hay nada");
}
}
