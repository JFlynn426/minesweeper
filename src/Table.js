import React, { Component } from 'react'
import TableCell from './TableCell'
import axios from 'axios'
class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: ''
    }
  }
  updateBoard =() =>{
    let url ='https://minesweeper-api.herokuapp.com/games'
  }
      axios.get(url).then(response => {
        this.setState({
   status: response.data["board"]
      })
    })
  }
  render() {
    return (
      <button onClick={this.state.newGame()}></button>
      <table className="board">
        <tbody>
          <tr>
            <TableCell status={this.props.board[0][0]} />
            <TableCell status={this.props.board[0][1]} />
            <TableCell status={this.props.board[0][2]} />
            <TableCell status={this.props.board[0][3]} />
            <TableCell status={this.props.board[0][4]} />
            <TableCell status={this.props.board[0][5]} />
            <TableCell status={this.props.board[0][6]} />
            <TableCell status={this.props.board[0][7]} />
          </tr>
          <tr>
            <TableCell status={this.props.board[1][0]} />
            <TableCell status={this.props.board[1][1]} />
            <TableCell status={this.props.board[1][2]} />
            <TableCell status={this.props.board[1][3]} />
            <TableCell status={this.props.board[1][4]} />
            <TableCell status={this.props.board[1][5]} />
            <TableCell status={this.props.board[1][6]} />
            <TableCell status={this.props.board[1][7]} />
          </tr>
          <tr>
            <TableCell status={this.props.board[2][0]} />
            <TableCell status={this.props.board[2][1]} />
            <TableCell status={this.props.board[2][2]} />
            <TableCell status={this.props.board[2][3]} />
            <TableCell status={this.props.board[2][4]} />
            <TableCell status={this.props.board[2][5]} />
            <TableCell status={this.props.board[2][6]} />
            <TableCell status={this.props.board[2][7]} />
          </tr>

          <tr>
            <TableCell status={this.props.board[3][0]} />
            <TableCell status={this.props.board[3][1]} />
            <TableCell status={this.props.board[3][2]} />
            <TableCell status={this.props.board[3][3]} />
            <TableCell status={this.props.board[3][4]} />
            <TableCell status={this.props.board[3][5]} />
            <TableCell status={this.props.board[3][6]} />
            <TableCell status={this.props.board[3][7]} />
          </tr>

          <tr>
            <TableCell status={this.props.board[4][0]} />
            <TableCell status={this.props.board[4][1]} />
            <TableCell status={this.props.board[4][2]} />
            <TableCell status={this.props.board[4][3]} />
            <TableCell status={this.props.board[4][4]} />
            <TableCell status={this.props.board[4][5]} />
            <TableCell status={this.props.board[4][6]} />
            <TableCell status={this.props.board[4][7]} />
          </tr>
          <tr>
            <TableCell status={this.props.board[5][0]} />
            <TableCell status={this.props.board[5][1]} />
            <TableCell status={this.props.board[5][2]} />
            <TableCell status={this.props.board[5][3]} />
            <TableCell status={this.props.board[5][4]} />
            <TableCell status={this.props.board[5][5]} />
            <TableCell status={this.props.board[5][6]} />
            <TableCell status={this.props.board[5][7]} />
          </tr>
          <tr>
            <TableCell status={this.props.board[6][0]} />
            <TableCell status={this.props.board[6][1]} />
            <TableCell status={this.props.board[6][2]} />
            <TableCell status={this.props.board[6][3]} />
            <TableCell status={this.props.board[6][4]} />
            <TableCell status={this.props.board[6][5]} />
            <TableCell status={this.props.board[6][6]} />
            <TableCell status={this.props.board[6][7]} />
          </tr>
          <tr>
            <TableCell status={this.props.board[7][0]} />
            <TableCell status={this.props.board[7][1]} />
            <TableCell status={this.props.board[7][2]} />
            <TableCell status={this.props.board[7][3]} />
            <TableCell status={this.props.board[7][4]} />
            <TableCell status={this.props.board[7][5]} />
            <TableCell status={this.props.board[7][6]} />
            <TableCell status={this.props.board[7][7]} />
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
