import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Table from './Table'

axios.get()
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Minesweeper</h1>
        <Table />
      </div>
    )
  }
}

export default App
