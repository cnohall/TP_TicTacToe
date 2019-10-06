import React from 'react';
import './App.css';

enum Player {
  None = 0,
  One = 1,
  Two = 2
}

interface IState {
  board: Player[]
}

class App extends React.Component<{}, IState> {
  public  state = {
    board: [Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None]
  }
  


  public renderCell = (index: number) => {
    return <div className="cell"/>
    
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
