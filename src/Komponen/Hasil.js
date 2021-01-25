import { Component } from "react";
import Tambah from "./Tambah";

function A() {
  return(
    <Tambah/>
  )
}

class Hasil extends Component{
  state = {
    panelTambah : [],
  }

  papanTambah = () =>{
    return(
      this.setState({
        panelTambah: A()
      })
    )
  }

  render(){
    return(
      <div>
        <div>{this.state.panelTambah}</div>
        <div>KOMPONEN HASIL</div>        
        <button onClick={this.papanTambah()}>PAPAN TAMBAH</button>
        <button>PAPAN KURANG</button>
        <button>PAPAN KALI</button>
        <button>PAPAN BAGI</button>
      </div>
    )
  }
}

export default Hasil