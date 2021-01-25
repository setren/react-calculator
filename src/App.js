import { Component } from "react";
import "./App.css";

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
        <button className="tombol" onClick={this.tombol}>7</button>
        <button className="tombol" onClick={this.tombol}>8</button>
        <button className="tombol" onClick={this.tombol}>9</button><br></br>
        <button className="tombol" onClick={this.tombol}>4</button>
        <button className="tombol" onClick={this.tombol}>5</button>
        <button className="tombol" onClick={this.tombol}>6</button><br></br>
        <button className="tombol" onClick={this.tombol}>1</button>
        <button className="tombol" onClick={this.tombol}>2</button>
        <button className="tombol" onClick={this.tombol}>3</button><br></br>
        <button className="tombol" onClick={this.tombol}>+</button>
        <button className="tombol" onClick={this.tombol}>0</button>
        <button className="tombol" onClick={this.tombolHasil}>=</button><br></br>
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
        <button className="tombol" onClick={this.tombol}>7</button>
        <button className="tombol" onClick={this.tombol}>8</button>
        <button className="tombol" onClick={this.tombol}>9</button><br></br>
        <button className="tombol" onClick={this.tombol}>4</button>
        <button className="tombol" onClick={this.tombol}>5</button>
        <button className="tombol" onClick={this.tombol}>6</button><br></br>
        <button className="tombol" onClick={this.tombol}>1</button>
        <button className="tombol" onClick={this.tombol}>2</button>
        <button className="tombol" onClick={this.tombol}>3</button><br></br>
        <button className="tombol" onClick={this.tombol}>-</button>
        <button className="tombol" onClick={this.tombol}>0</button>
        <button className="tombol" onClick={this.tombolHasil}>=</button><br></br>
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
        <button className="tombol" onClick={this.tombol}>7</button>
        <button className="tombol" onClick={this.tombol}>8</button>
        <button className="tombol" onClick={this.tombol}>9</button><br></br>
        <button className="tombol" onClick={this.tombol}>4</button>
        <button className="tombol" onClick={this.tombol}>5</button>
        <button className="tombol" onClick={this.tombol}>6</button><br></br>
        <button className="tombol" onClick={this.tombol}>1</button>
        <button className="tombol" onClick={this.tombol}>2</button>
        <button className="tombol" onClick={this.tombol}>3</button><br></br>
        <button className="tombol" onClick={this.tombol}>*</button>
        <button className="tombol" onClick={this.tombol}>0</button>
        <button className="tombol" onClick={this.tombolHasil}>=</button><br></br>
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
        <button className="tombol" onClick={this.tombol}>7</button>
        <button className="tombol" onClick={this.tombol}>8</button>
        <button className="tombol" onClick={this.tombol}>9</button><br></br>
        <button className="tombol" onClick={this.tombol}>4</button>
        <button className="tombol" onClick={this.tombol}>5</button>
        <button className="tombol" onClick={this.tombol}>6</button><br></br>
        <button className="tombol" onClick={this.tombol}>1</button>
        <button className="tombol" onClick={this.tombol}>2</button>
        <button className="tombol" onClick={this.tombol}>3</button><br></br>
        <button className="tombol" onClick={this.tombol}>/</button>
        <button className="tombol" onClick={this.tombol}>0</button>
        <button className="tombol" onClick={this.tombolHasil}>=</button><br></br>
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
    array: [null , <A/>, <B/>, <C/>, <D/>],
    count: 0
  }

tombol = (e) => {
  if(e.target.innerHTML === 'Plus'){
    this.setState({count: 1})
  }else if (e.target.innerHTML === 'Mins'){
    this.setState({count: 2})
  }else if (e.target.innerHTML === 'Mult'){
    this.setState({count: 3})
  }else if (e.target.innerHTML === 'Divs'){
    this.setState({count: 4})
  }else{
    this.setState({count: 0})
  }
}

render(){
  return(
    <div>
      <button className="tombolPanel" onClick={this.tombol}>Plus</button>
      <button className="tombolPanel" onClick={this.tombol}>Mins</button><br></br>
      <button className="tombolPanel" onClick={this.tombol}>Mult</button>
      <button className="tombolPanel" onClick={this.tombol}>Divs</button>
      <div className="panel">{this.state.angka}</div>
      <div className="panel">{this.state.hasil}</div>
      <div>{this.state.array[this.state.count]}</div>
    </div>)
}
}

export default App