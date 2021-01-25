import { Component } from "react";

class Tambah extends Component{

  state = {
    angka : '',
    hasil : ''
  }

  papanTambah = (e) => {
    console.log(this.props)    
  }

  tombol = (e) => {
    this.setState({
      angka: this.state.angka + e.target.innerHTML
    })
  }

  tombolHasil = (e) => {
    const index = this.state.angka.indexOf('+')
    const angka1 = this.state.angka.slice(0, index)
    const angka2 = this.state.angka.slice(index + 1)
    const hasil = parseInt(angka1) + parseInt(angka2)
    this.setState({
      hasil: hasil
    })
  }


  render(){
    return(
      <div>
        <hr></hr>
        {/* <div>{this.state.angka}</div>
        <div>{this.state.hasil}</div> */}
        <button onClick={this.tombol}>7</button>
        <button onClick={this.tombol}>8</button>
        <button onClick={this.tombol}>9</button><br></br>
        <button onClick={this.tombol}>4</button>
        <button onClick={this.tombol}>5</button>
        <button onClick={this.tombol}>6</button><br></br>
        <button onClick={this.tombol}>1</button>
        <button onClick={this.tombol}>2</button>
        <button onClick={this.tombol}>3</button><br></br>
        <button onClick={this.tombol}>+</button>
        <button onClick={this.tombol}>0</button>
        <button onClick={this.tombolHasil}>=</button><br></br>
      </div>
    )
  }
}

export default Tambah