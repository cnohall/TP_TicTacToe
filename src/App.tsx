import React from 'react';
import './App.css';

type ONGOING_GAME = -1
const ONGOING_GAME = -1

enum Player {
  None = 0,
  One = 1,
  Two = 2
}



interface IState {
  board: Player[],
  nextPlayerTurn: Player,
  gameIsWon: Player | ONGOING_GAME
}

class App extends React.Component<{}, IState> {
  public  state = {
    board: [Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None],
    nextPlayerTurn: Player.One,
    gameIsWon: ONGOING_GAME
  }

  public checkIfGameIsOver = (board: Player[]) => {

    if (board[0] === board[1] && board[1] === board[2] && board[2] !== Player.None) {
      return board[0]
    } else if (board[3] === board[4] && board[4] === board[5] && board[5] !== Player.None) {
      return board[3]
    } else if (board[6] === board[7] && board[7] === board[8] && board[8] !== Player.None) {
    return board[6]
    } else if (board[0] === board[3] && board[3] === board[6] && board[6] !== Player.None) {
      return board[0]
    } else if (board[1] === board[4] && board[4] === board[7] && board[7] !== Player.None) {
      return board[1]
    } else if (board[2] === board[5] && board[5] === board[8] && board[8] !== Player.None) {
      return board[2]
    } else if (board[0] === board[4] && board[4] === board[8] && board[8] !== Player.None) {
      return board[0]
    } else if (board[2] === board[4] && board[4] === board[6] && board[6] !== Player.None) {
      return board[2]
    } 

    for (let i = 0; i <board.length; i++){
      if (board[i] === Player.None) {
        return ONGOING_GAME
      }
    }
    return Player.None
  }
  
  public createOnClickHandler = (index: number) => () => {
    const { board, nextPlayerTurn, gameIsWon } = this.state

    if (gameIsWon !== ONGOING_GAME || board[index] !== Player.None){
      return
    }

    const newBoard = board.slice()
    newBoard[index] = nextPlayerTurn
    
    const newGameIsWon = this.checkIfGameIsOver(newBoard)

    this.setState({ board: newBoard, nextPlayerTurn: 3 - nextPlayerTurn, gameIsWon: newGameIsWon})
  }

  public renderStatus = () => {
    const {gameIsWon} = this.state
    const winningtext = gameIsWon !== Player.None ? `Player ${gameIsWon} won` : "The game is a draw!"
    return <div style={{margin: "25px"}}>
      {"Player 1 is green, Player 2 is red"} <br/>
      {gameIsWon === ONGOING_GAME ? 'Game is onging' : winningtext}
    </div>
  }

  public renderCell = (index: number) => {
    const { board } = this.state


    return <div className="cell" onClick= {this.createOnClickHandler(index)} data-player = {board[index]}  />
    
  }

  public renderBoard = () => {
    const { board } = this.state

    return <div className="board-container">
    {board.map((value, key) => this.renderCell(key))}
    </div>
  }

  public render(){
    return (
      <div className="App">
        <header className="App-header">
        <p>
          Tic Tac Toe by cnohall
        </p>
        {this.renderBoard()}
        {this.renderStatus()}

        </header>
      </div>

    );
  }
}


export default App;
