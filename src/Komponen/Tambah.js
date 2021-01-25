import { Component } from "react";

class Tambah extends Component{

  state = {
    isi : '',
    hasil : 'isi'
  }

  tombolTambah = (e) => {
    this.setState({
      isi: this.state.isi + e.target.innerHTML
    })
  }

  tombolHasil = (e) => {
    const oprtr = '+'
    const isi1 = this.state.hasil
    console.log(this.state.hasil)
    console.log(oprtr)
  }

  render(){
    return(
      <div>
        <div>{this.state.isi}</div>
        <button onClick={this.tombolTambah}>7</button>
        <button onClick={this.tombolTambah}>8</button>
        <button onClick={this.tombolTambah}>9</button><br></br>
        <button onClick={this.tombolTambah}>6</button>
        <button onClick={this.tombolTambah}>7</button>
        <button onClick={this.tombolTambah}>8</button><br></br>
        <button onClick={this.tombolTambah}>+</button>
        <button onClick={this.tombolTambah}>0</button>
        <button onClick={this.tombolHasil}>=</button>
      </div>
    )
  }
}

export default Tambah