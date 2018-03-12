class Tablero extends React.Component {
	//este constructor es necesario para tener objetos inmutables, como por ejemplo  esta variable matriz
	//todos los objetos inmutables se guardan en this.state
	//mientras que los objetos mutables se guardan en this.props, estos ultimos son equivalentes a atributos de objeto en Java
	//los inmutables como esta matriz se utilizan para refrescar la vista de manera ligera en React
	//la representacion logica, el modelo es esta matriz
	constructor(props) {
		super(props);
		//crea una matriz n*n que representa el tablero
		var tabAux = new Array(props.tamanio);
		for (var i = 0; i < props.tamanio; i++) {
			tabAux[i] = new Array(props.tamanio);
			tabAux[i].fill(null);
		}
		//siguienteX marca de que jugador es el turno
		this.state = {
		  tableroMuestra: tabAux,
		  siguienteX: true,
		};
	}
	
	//esta funcion modifica el estado(inmutable) de este objeto, el tablero, es decir, fuerza un refresco de la vista
	//this.setState actualiza el objeto(tableroMuestra) del modelo que es inmutable lo que fuerza el refresco el elemento que le haga referencia
	//por ejemplo, atiendeClick(0,1,3) actualiza tableroMuestra[0][1] por lo que refresca el boton que hace referencia a este valor, el boton
	//con id="0-1"
	atiendeClick(iFil,jCol) {
		console.log(iFil+"-"+jCol);
		//si ya ha ganado alguien o la casilla esta rellena entonces no hacer nada
		if (calcularGanador(this.state.tableroMuestra) || this.state.tableroMuestra[iFil][jCol]) {
			return;//sale sin hacer nada
		}
		//copia tableroMuestra, no modifica el existente
		const tabAux=copiaMatrizRecurivamente(this.state.tableroMuestra,this.state.tableroMuestra.length);
		//rellena segun turno de jugador
		if(this.state.siguienteX){
			tabAux[iFil][jCol] = 'X';
		}
		else{
			tabAux[iFil][jCol] = 'O';
		}
		//cambia el objeto antiguo por el nuevo en vez de modificar el antiguo
		//actualiza quien es siguiente
		this.setState({
			tableroMuestra: tabAux,
			siguienteX: !this.state.siguienteX,
			});
	}
	
	//por cada fila de 0 a n-1 crea un objeto Fila
	//cada uno de estos objetos Fila tiene asociada la funcion atiendeClick a los eventos onClick de cada uno de sus botones(ver clase Casilla, arriba)
	creaFilas(tam){
		//lista de elementos React a devolver para que React cree la lista DOM equivalentes
		//es decir, si le damos una lista [<ul><li>1</li><li>2</li><li>3</li></ul>] dibujara <ul><li>1</li> <li>2</li> <li>3</li></ul>
		var filasAux = [];
		var i = 0;
		for(i=0;i<tam;i++){
			//crea un objeto Fila y lo que nos devuelva su render lo aniade a la lista 
			//el uso de la funcion lambda es obligatorio: (iFil,jCol)=>this.atiendeClick(iFil,...
			filasAux.push(<Fila key={i} indice={i} tamanio={tam} filaMuestra={this.state.tableroMuestra[i]} clicarFila={(iFil,jCol)=>this.atiendeClick(iFil,jCol)}/>);
		}
		return filasAux;
	}
	
	//crea el tablero dentro de un contenedor anonimo
	//el tablero es lo que devuelve creaFilas(n)
	//este render devuelve un objeto DOM del estilo:
	//<div>
	//<div className="claseEstado">Siguiente jugador: X</div>
	//<div className="board-row">
	//<button id="0-0" className="claseCasilla"  onClick="atiendeClick(0,0)"></button>
	//<button id="0-1" className="claseCasilla"  onClick="atiendeClick(0,1)"></button>
	//</div>
	//<div className="board-row">
	//<button id="1-0" className="claseCasilla"  onClick="atiendeClick(1,0)"></button>
	//<button id="1-1" className="claseCasilla"  onClick="atiendeClick(1,1)"></button>
	//</div>
	//</div>
	render() {				
		const ganador = calcularGanador(this.state.tableroMuestra);
		var siguiente = 'O';
		if(this.state.siguienteX){
			siguiente = 'X';
		}
		var estado = "";
		if (ganador) {
			estado = 'Ganador: ' + ganador;
		}
		else{
			estado = "Siguiente jugador: "+ siguiente;
		}
		var tam = this.props.tamanio;
		return (
		  <div>
			<div className="claseEstado">{estado}</div>
			{this.creaFilas(tam)}
		  </div>
		);
	}
}