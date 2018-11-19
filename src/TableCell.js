import React, { Component } from 'react'

class TableCell extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cellStatus: ''
    }
  }
  flagCell = event => {
    event.preventDefault()
    this.setState({
      status: 'F'
    })
  }
  openCell = event => {
    this.setState({
      status: 'C'
    })
  }
  render() {
    return (
      <td onContextMenu={this.flagCell} onClick={this.openCell}>
        {this.state.status}
      </td>
    )
  }
}

export default TableCell
