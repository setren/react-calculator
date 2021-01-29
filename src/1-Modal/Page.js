// import { Component } from "react";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";
// import "./Page.css"

// class Page extends Component {
//   state = {
//     open: false,
//     nama: 'setren',
//     value: ''
//   };

//   handleChange = (event) => {
//     this.setState({
//       value: event.target.value
//     });
//   }

//   onOpenModal = () => {
//     this.setState({ open: true });
//   };

//   onCloseModal = () => {
//     this.setState({ open: false });
//   };

//   onSaveModal = () => {
//     this.setState({ nama: this.state.value })
//     this.setState({ open: false })
//   }

//   render() {
//     const { open } = this.state;
//     return (
//       <div>
//         <h1>{this.state.nama}</h1>
//         <button className="button" onClick={this.onOpenModal}>CHANGE</button>
//         <Modal open={open} onClose={this.onCloseModal}>
//           <h2>Are you sure to change your name?</h2>
//           <form>
//             <input defaultValue={this.state.nama} onChange={this.handleChange} />
//           </form>
//           <button className="button" onClick={this.onCloseModal}>CLOSE</button><button className="button" onClick={this.onSaveModal}>SAVE</button>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default Page

import { Component } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./Page.css"

class Page extends Component {
  state = {
    nama: 'Izul',
    open: false,
    value: '',
  }
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      value: event.target.value
    });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onSaveModal = () => {
    this.setState({ nama: this.state.value })
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
        <h1>{this.state.nama}</h1>
        <button className="button" onClick={this.onOpenModal}>CHANGE</button>
        { this.state.open === true && <MyOwnModal handleChange={this.handleChange} onOpenModal={this.onOpenModal} onCloseModal={this.onCloseModal} onSaveModal={this.onSaveModal} nama={this.state.nama} open={this.state.open} value={this.state.value} />}
      </div>
    );
  }
}

class MyOwnModal extends Component {
  render() {
    const { open } = this.props;
    return (
      <Modal open={open} onClose={this.props.onCloseModal}>
        <h2>Are you sure to change your name?</h2>
        <form>
          <input defaultValue={this.props.nama} onChange={this.props.handleChange} />
        </form>
        <button className="button" onClick={this.props.onCloseModal}>CLOSE</button><button className="button" onClick={this.props.onSaveModal}>SAVE</button>
      </Modal>
    )
  }
}

export default Page