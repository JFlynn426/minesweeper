import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import TableCell from './TableCell'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      difficulty: 0,
      status: {
        id: 1,
        board: [
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ],
        state: 'Start your game!',
        mines: 10
      }
    }
  }

  openCell = (row, col) => {
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${
          this.state.status.id
        }/check`,
        {
          id: this.state.status.id,
          row: row,
          col: col
        }
      )
      .then(response => {
        this.setState({
          status: response.data
        })
      })
  }

  flagCell = (row, col) => {
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${
          this.state.status.id
        }/flag`,
        {
          id: this.state.status.id,
          row: row,
          col: col
        }
      )
      .then(response => {
        this.setState({
          status: response.data
        })
      })
  }
  selectGameDifficulty = event => {
    this.setState({
      difficulty: parseInt(event.target.value)
    })
  }
  newGame = event => {
    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: this.state.difficulty
      })
      .then(response => {
        this.setState({
          status: response.data
        })
      })
  }
  gameStatus = () => {
    if (this.state.status.state === 'Start your game!') {
      return 'Click New Game to Start!'
    }
    if (this.state.status.state === 'new') {
      return 'Click a square!'
    }
    if (this.state.status.state === 'playing') {
      return `Playing game ${this.state.status.id}`
    }
    if (this.state.status.state === 'won') {
      return 'You won! Another game?'
    }
    if (this.state.status.state === 'lost') {
      return 'You blew up sucka! Another game?'
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Minesweeper</h1>
        <h3>{this.gameStatus()}</h3>
        <button onClick={this.newGame}>New Game</button>{' '}
        <select
          value={this.state.difficulty}
          onChange={this.selectGameDifficulty}
        >
          <option value="0">Easy</option>
          <option value="1">Intermediate</option>
          <option value="2">Expert</option>
        </select>
        <table className="board">
          <tbody>
            {this.state.status.board.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((value, columnIndex) => (
                  <TableCell
                    key={columnIndex}
                    col={columnIndex}
                    row={rowIndex}
                    flagCell={this.flagCell}
                    openCell={this.openCell}
                    value={value}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <h3>{this.state.status.mines} mines left</h3>
      </div>
    )
  }
}

export default App
