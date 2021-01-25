import { Component } from "react";

class Tambah extends Component{
  state = {
    angka : '',
    hasil : ''
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
        <div>{this.state.angka}</div>
        <div>{this.state.hasil}</div>
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

class Kurang extends Component{
  state = {
    angka : '',
    hasil : ''
  }
  tombol = (e) => {
    this.setState({
      angka: this.state.angka + e.target.innerHTML
    })
  }
  tombolHasil = (e) => {
    const index = this.state.angka.indexOf('-')
    const angka1 = this.state.angka.slice(0, index)
    const angka2 = this.state.angka.slice(index + 1)
    const hasil = parseInt(angka1) - parseInt(angka2)
    this.setState({
      hasil: hasil
    })
  }
  render(){
    return(
      <div>
        <div>{this.state.angka}</div>
        <div>{this.state.hasil}</div>
        <button onClick={this.tombol}>7</button>
        <button onClick={this.tombol}>8</button>
        <button onClick={this.tombol}>9</button><br></br>
        <button onClick={this.tombol}>4</button>
        <button onClick={this.tombol}>5</button>
        <button onClick={this.tombol}>6</button><br></br>
        <button onClick={this.tombol}>1</button>
        <button onClick={this.tombol}>2</button>
        <button onClick={this.tombol}>3</button><br></br>
        <button onClick={this.tombol}>-</button>
        <button onClick={this.tombol}>0</button>
        <button onClick={this.tombolHasil}>=</button><br></br>
      </div>
    )
  }
}

class Kali extends Component{
  state = {
    angka : '',
    hasil : ''
  }
  tombol = (e) => {
    this.setState({
      angka: this.state.angka + e.target.innerHTML
    })
  }
  tombolHasil = (e) => {
    const index = this.state.angka.indexOf('*')
    const angka1 = this.state.angka.slice(0, index)
    const angka2 = this.state.angka.slice(index + 1)
    const hasil = parseInt(angka1) * parseInt(angka2)
    this.setState({
      hasil: hasil
    })
  }
  render(){
    return(
      <div>
        <div>{this.state.angka}</div>
        <div>{this.state.hasil}</div>
        <button onClick={this.tombol}>7</button>
        <button onClick={this.tombol}>8</button>
        <button onClick={this.tombol}>9</button><br></br>
        <button onClick={this.tombol}>4</button>
        <button onClick={this.tombol}>5</button>
        <button onClick={this.tombol}>6</button><br></br>
        <button onClick={this.tombol}>1</button>
        <button onClick={this.tombol}>2</button>
        <button onClick={this.tombol}>3</button><br></br>
        <button onClick={this.tombol}>*</button>
        <button onClick={this.tombol}>0</button>
        <button onClick={this.tombolHasil}>=</button><br></br>
      </div>
    )
  }
}

class Bagi extends Component{
  state = {
    angka : '',
    hasil : ''
  }
  tombol = (e) => {
    this.setState({
      angka: this.state.angka + e.target.innerHTML
    })
  }
  tombolHasil = (e) => {
    const index = this.state.angka.indexOf('/')
    const angka1 = this.state.angka.slice(0, index)
    const angka2 = this.state.angka.slice(index + 1)
    const hasil = parseInt(angka1) / parseInt(angka2)
    this.setState({
      hasil: hasil
    })
  }
  render(){
    return(
      <div>
        <div>{this.state.angka}</div>
        <div>{this.state.hasil}</div>
        <button onClick={this.tombol}>7</button>
        <button onClick={this.tombol}>8</button>
        <button onClick={this.tombol}>9</button><br></br>
        <button onClick={this.tombol}>4</button>
        <button onClick={this.tombol}>5</button>
        <button onClick={this.tombol}>6</button><br></br>
        <button onClick={this.tombol}>1</button>
        <button onClick={this.tombol}>2</button>
        <button onClick={this.tombol}>3</button><br></br>
        <button onClick={this.tombol}>/</button>
        <button onClick={this.tombol}>0</button>
        <button onClick={this.tombolHasil}>=</button><br></br>
      </div>
    )
  }
}

function A(){
  return (<Tambah/>)  
}

function B(){
  return (<Kurang/>)  
}

function C(){
  return (<Kali/>)  
}

function D(){
  return (<Bagi/>)  
}

class App extends Component{

state={
    array: [null , <A/>, <B/>, <C/>, <D/>]  ,
    count: 0
  }

tombol = (e) => {
  if(e.target.innerHTML === 'Tambah'){
    this.setState({count: 1})
  }else if (e.target.innerHTML === 'Kurang'){
    this.setState({count: 2})
  }else if (e.target.innerHTML === 'Kali'){
    this.setState({count: 3})
  }else if (e.target.innerHTML === 'Bagi'){
    this.setState({count: 4})
  }else{
    this.setState({count: 0})
  }
}

render(){
  return(
    <div>
      <button onClick={this.tombol}>Tambah</button>
      <button onClick={this.tombol}>Kurang</button>
      <button onClick={this.tombol}>Kali</button>
      <button onClick={this.tombol}>Bagi</button>
      <h1>{this.state.array[ this.state.count]}</h1>
    </div>)
}
}

export default App