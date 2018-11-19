import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import TableCell from './TableCell'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
        state: 'new',
        mines: 10
      }
    }
  }
  flagCell = event => {
    event.preventDefault()
    this.setState({
      column: 'F'
    })
  }
  openCell = event => {
    this.setState({
      column: 'C'
    })
  }
  // classNameFlagBomb = () => {
  //   if (this.props.status === 'F') {
  //     return 'F'
  //   }
  //   if (this.props.status === '_') {
  //     return '_'
  //   }
  //   if (this.props.status === '*') {
  //     return 'bomb'
  //   }
  //   if (this.props.status === '@') {
  //     return 'flagged-bomb'
  //   }
  // }
  updateGame = () => {
    let url = `https://minesweeper-api.herokuapp.com/games/${this.state.id}`

    axios.get(url).then(response => {
      this.setState({
        status: response.data
      })
    })
  }
  newGame = () => {
    let url = 'https://minesweeper-api.herokuapp.com/games/'

    axios.get(url).then(response => {
      this.setState({
        id: response.data['id']
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Minesweeper</h1>
        <button onClick={this.newGame()}>New Game</button>
        <table className="board">
          <tbody>
            {this.state.status.board.map(row => {
              return (
                <tr onContextMenu={this.flagCell} onClick={this.openCell}>
                  {row.map(column => (
                    <TableCell status={column} />
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
