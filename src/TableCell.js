import React, { Component } from 'react'

class TableCell extends Component {
  flagCell = event => {
    event.preventDefault()
    this.props.flagCell(this.props.row, this.props.col)
  }
  openCell = event => {
    this.props.openCell(this.props.row, this.props.col)
  }
  classNameFlagBomb = () => {
    if (this.props.value === 'F') {
      return 'F'
    }
    if (this.props.value === '_') {
      return '_'
    }
    if (this.props.value === '*') {
      return 'bomb'
    }
    if (this.props.value === '@') {
      return 'flagged-bomb'
    } else {
      return 'num'
    }
  }
  render() {
    return (
      <td
        className={this.classNameFlagBomb()}
        onContextMenu={this.flagCell}
        onClick={this.openCell}
      >
        {this.props.value}
      </td>
    )
  }
}

export default TableCell
