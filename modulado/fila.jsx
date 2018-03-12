class Fila extends React.Component {			
	creaCasillasDeFila(i,tam,filMuesAux,clicarFilaAux){	
		var casillasDeFilaAux = [];
		var j = 0;				
		for(j=0;j<tam;j++){
			var ind = (i*tam)+j;
			casillasDeFilaAux.push(<Casilla key={ind} clicarCasilla={clicarFilaAux} casillaMuestra={filMuesAux[j]} indiceFila={i} indiceColumna={j}/>);
		}
		return casillasDeFilaAux;
	}
	
	//devuelve un objeto DOM del estilo:
	//<div className="board-row">
	//<button id="0-0" className="claseCasilla"  onClick="atiendeClick(0,0)"></button>
	//<button id="0-1" className="claseCasilla"  onClick="atiendeClick(0,1)"></button>
	//</div>
	render() {
		var clicarFilaAux = this.props.clicarFila;
		var filMuesAux = this.props.filaMuestra;
		var tam = this.props.tamanio;
		var i = this.props.indice;
		return (
		  <div className="board-row">
				{this.creaCasillasDeFila(i,tam,filMuesAux,clicarFilaAux)}
		  </div>
		);
	}
}