import React, { Component } from 'react'

class TableCell extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <td onContextMenu={this.flagCell} onClick={this.openCell}>
        {this.props.status}
      </td>
    )
  }
}

export default TableCell
