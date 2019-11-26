'use strict'

  //Agrego un "constructor a la clase para inicializar el "estado"*/
  /*Se eliminó el constructor porque Square ya no llega en segimiento del estado del juego

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  */

  //render()
  function Square(props) {
    return (
      //Al clikear cualquier botón, me salta una alerta
      <button
        className="square"
        onClick={props.onClick}>
          {props.value}

      </button>
    );
  }


//{this.state.value}
//Cambiamos this.state, por this.props --> Tuvimos que bajar esta anotación.

/* onClick={() => this.setState({value: "X"})}>
onClick={() => this.props.onClick()}
>
{this.props.value}

Cambiamos los this.props por props

Se elimino para hacer una funcion Square
class Square extends React.Component
*/

class Board extends React.Component {

/*Agregamos un constructor al elemento Board
y establecemos un estado inicial que contenga
un array de 9 nulls, que corresponden a los 9 cuadrados vacíos*/

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  /*Agregamos handle.Click para no tener errores y poder guardar los valores*/
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O' ;
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    //Hago que cada boton, cuadrado tenga un valor
    //return <Square value={i}/>;

    return (
      <Square
        //Hago que cada cuadrado tenga la propiedad "X" "O" o "Null"
        value={this.state.squares[i]}
        //Hacemos que al clikear un cuadrado, se llame el estado del Board.
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    //Vamos a determinar que jugador sigue
    const status = 'Siguiente Jugador: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
