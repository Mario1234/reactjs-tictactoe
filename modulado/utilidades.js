function calcularGanador(tabAux) {
	for(var k = 0; k < tabAux.length; k++) {					
		if (tabAux[k][0] && tabAux[k][0] === tabAux[k][1] && tabAux[k][0] === tabAux[k][2]) {
		  return tabAux[k][0];
		}
		if (tabAux[0][k] && tabAux[0][k] === tabAux[1][k] && tabAux[0][k] === tabAux[2][k]) {
		  return tabAux[0][k];
		}					
	}
	if (tabAux[0][0] && tabAux[0][0] === tabAux[1][1] && tabAux[0][0] === tabAux[2][2]) {
	  return tabAux[0][0];
	}
	if (tabAux[0][2] && tabAux[0][2] === tabAux[1][1] && tabAux[0][2] === tabAux[2][0]) {
	  return tabAux[0][2];
	}
	return null;
}
	
//un copia matriz generico
//copia la matrizOrigen en el objeto matrizDestino, copia el contenido de cada casilla
function copiaMatrizRecurivamente(matrizOrigen,tam){
	const matrizDestino = [];
	//recorre cada fila y y copia su contenido
	for (var k = 0; k < tam; k++) {
		//copia cada casilla de esta fila
		matrizDestino[k] = matrizOrigen[k].slice();
	}
	return matrizDestino;
}