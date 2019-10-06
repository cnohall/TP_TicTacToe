import React from 'react';
import './App.css';

enum Player {
  None = 0,
  One = 1,
  Two = 2
}

interface IState {
  board: Player[],
  nextPlayerTurn: Player
}

class App extends React.Component<{}, IState> {
  public  state = {
    board: [Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None],
    nextPlayerTurn: Player.One
  }
  
  public createOnClickHandler = (index: number) => () => {
    const { board, nextPlayerTurn } = this.state

    const newBoard = board.slice()
    newBoard[index] = nextPlayerTurn

    this.setState({ board: newBoard, nextPlayerTurn: 3 - nextPlayerTurn})
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
        <p>
          Tic Tac Toe by cnohall
        </p>
        <header className="App-header">
          {this.renderBoard()}
        </header>

      </div>
    );
  }
}


export default App;
