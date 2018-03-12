class Casilla extends React.Component {			
	//devuelve un DOM del estilo:
	//<button id="0-1" className="claseCasilla"  onClick="atiendeClick(0,1)"></button>
	render() {
		var jCol = this.props.indiceColumna;
		var iFil = this.props.indiceFila;
		var identificador = iFil+"-"+jCol;
		//this.props.casillaMuestra es el objeto del modelo inmutable this.state.tableroMuestra[i][j]
		//siempre que this.state.tableroMuestra[i][j] se modifique se modificara esta vista, es decir, el valor del boton
		//parece obligatorio usar una funcion lambda en el onClick
		//clicarCasilla(iFil,jCol) llama a atiendeClick(iFil,jCol)
		return (
		  <button id={identificador} className="claseCasilla"  onClick={ () => this.props.clicarCasilla(iFil,jCol)}>
			{this.props.casillaMuestra}
		  </button>
		);
	}
}