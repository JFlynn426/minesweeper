import React, { Component } from 'react'
import TableCell from './TableCell'
class Table extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        status: ''
      }
    }
  refreshBoard = boardID => {

  }
  boardID=[this.row],[this.column]
  url = 'https://minesweeper-api.herokuapp.com/games'
  axios.get(url).then(response => {this.setState({
    
  })})
}
  let

  newGame ()
  render() {
    return (
      // <button onClick={this.state.newGame()}></button>
      <table className="board">
        <tbody>
          <tr>
            <TableCell  />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </tr>
          <tr>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </tr>
          <tr>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </tr>

          <tr>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </tr>

          <tr>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </tr>
          <tr>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </tr>
          <tr>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
