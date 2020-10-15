import React, { Component } from "react";
import "../App.css";
import "../page2.css";
import Header from "./Header";
import { connect } from "react-redux";
import { getItems } from "../redux/reducers/cardsReducer";
import ReactModal from "react-modal";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      showModal7: false,
      showModal8: false,
    };
  }
  componentDidMount() {
    this.props.getItems();
  }
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  handleOpenModal2 = () => {
    this.setState({ showModal2: true });
  };

  handleCloseModal2 = () => {
    this.setState({ showModal2: false });
  };
  handleOpenModal3 = () => {
    this.setState({ showModal3: true });
  };

  handleCloseModal3 = () => {
    this.setState({ showModal3: false });
  };
  handleOpenModal4 = () => {
    this.setState({ showModal4: true });
  };

  handleCloseModal4 = () => {
    this.setState({ showModal4: false });
  };
  handleOpenModal5 = () => {
    this.setState({ showModal5: true });
  };

  handleCloseModal5 = () => {
    this.setState({ showModal5: false });
  };
  handleOpenModal6 = () => {
    this.setState({ showModal6: true });
  };

  handleCloseModal6 = () => {
    this.setState({ showModal6: false });
  };
  handleOpenModal7 = () => {
    this.setState({ showModal7: true });
  };

  handleCloseModal7 = () => {
    this.setState({ showModal7: false });
  };
  handleOpenModal8 = () => {
    this.setState({ showModal8: true });
  };

  handleCloseModal8 = () => {
    this.setState({ showModal8: false });
  };

  render() {
    return (
      <div className="App">
        <div className="page">
          <Header />
          <div className="img-div">
            <img
              className="img"
              src="https://res.cloudinary.com/kevin14/image/upload/v1588109128/xnhijwingirz33btqsey.jpg"
            ></img>
            <h1 className="img-text">
              We award grants to nonprofits for{" "}
              <p>marketing & development services.</p>
            </h1>
          </div>
        </div>
        <div className="page2">
          <section className="img-sct">
            <img
              className="img"
              src="https://i.imgur.com/rCGqHuq.jpg"
            ></img>
            <h1 className="img-text2">Social Issue Category Examples</h1>
          </section>
          <section className="cards-sec">
            <div className="cards" onClick={this.handleOpenModal}>
              <img className="card-pic" src={this.props.items[0].pic}></img>
              <h1>{this.props.items[0].title}</h1>
            </div>
            <div></div>
            <div className="cards" onClick={this.handleOpenModal2}>
              <img className="card-pic" src={this.props.items[1].pic}></img>
              <h1>{this.props.items[1].title}</h1>
            </div>
            <div className="cards" onClick={this.handleOpenModal3}>
              <img className="card-pic" src={this.props.items[2].pic}></img>
              <h1>{this.props.items[2].title}</h1>
            </div>
            <div className="cards" onClick={this.handleOpenModal4}>
              <img className="card-pic" src={this.props.items[3].pic}></img>
              <h1>{this.props.items[3].title}</h1>
            </div>
            <div className="cards" onClick={this.handleOpenModal5}>
              <img className="card-pic" src={this.props.items[4].pic}></img>
              <h1>{this.props.items[4].title}</h1>
            </div>
            <div className="cards" onClick={this.handleOpenModal6}>
              <img className="card-pic" src={this.props.items[5].pic}></img>
              <h1>{this.props.items[5].title}</h1>
            </div>
            <div className="cards" onClick={this.handleOpenModal7}>
              <img className="card-pic" src={this.props.items[6].pic}></img>
              <h1>{this.props.items[6].title}</h1>
            </div>
            <div className="cards" onClick={this.handleOpenModal8}>
              <img className="card-pic" src={this.props.items[7].pic}></img>
              <h1>{this.props.items[7].title}</h1>
            </div>
          </section>
          <ReactModal
            isOpen={this.state.showModal}
            className="Modal"
            onRequestClose={this.handleCloseModal}
            contentLabel="Minimal Modal Example"
          >
            <div className="modal-pic">
              <h1 className="img-text">{this.props.items[0].title}</h1>
              <img className="img" src={this.props.items[0].pic}></img>
            </div>
            <h1 className="info-txt">{this.props.items[8].info}</h1>
          </ReactModal>
          <ReactModal
            isOpen={this.state.showModal2}
            className="Modal"
            onRequestClose={this.handleCloseModal2}
            contentLabel="Minimal Modal Example"
          >
            <div className="modal-pic">
              <h1 className="img-text">{this.props.items[1].title}</h1>
              <img className="img" src={this.props.items[1].pic}></img>
            </div>
            <h1 className="info-txt">{this.props.items[8].info}</h1>
          </ReactModal>
          <ReactModal
            isOpen={this.state.showModal3}
            className="Modal"
            onRequestClose={this.handleCloseModal3}
            contentLabel="Minimal Modal Example"
          >
            <div className="modal-pic">
              <h1 className="img-text">{this.props.items[2].title}</h1>
              <img className="img" src={this.props.items[2].pic}></img>
            </div>
            <h1 className="info-txt">{this.props.items[8].info}</h1>
          </ReactModal>
          <ReactModal
            isOpen={this.state.showModal4}
            className="Modal"
            onRequestClose={this.handleCloseModal4}
            contentLabel="Minimal Modal Example"
          >
            <div className="modal-pic">
              <h1 className="img-text">{this.props.items[3].title}</h1>
              <img className="img" src={this.props.items[3].pic}></img>
            </div>
            <h1 className="info-txt">{this.props.items[8].info}</h1>
          </ReactModal>
          <ReactModal
            isOpen={this.state.showModal5}
            className="Modal"
            onRequestClose={this.handleCloseModal5}
            contentLabel="Minimal Modal Example"
          >
            <div className="modal-pic">
              <h1 className="img-text">{this.props.items[4].title}</h1>
              <img className="img" src={this.props.items[4].pic}></img>
            </div>
            <h1 className="info-txt">{this.props.items[8].info}</h1>
          </ReactModal>
          <ReactModal
            isOpen={this.state.showModal6}
            className="Modal"
            onRequestClose={this.handleCloseModal6}
            contentLabel="Minimal Modal Example"
          >
            <div className="modal-pic">
              <h1 className="img-text">{this.props.items[5].title}</h1>
              <img className="img" src={this.props.items[5].pic}></img>
            </div>
            <h1 className="info-txt">{this.props.items[8].info}</h1>
          </ReactModal>
          <ReactModal
            isOpen={this.state.showModal7}
            className="Modal"
            onRequestClose={this.handleCloseModal7}
            contentLabel="Minimal Modal Example"
          >
            <div className="modal-pic">
              <h1 className="img-text">{this.props.items[6].title}</h1>
              <img className="img" src={this.props.items[6].pic}></img>
            </div>
            <h1 className="info-txt">{this.props.items[8].info}</h1>
          </ReactModal>
          <ReactModal
            isOpen={this.state.showModal8}
            className="Modal"
            onRequestClose={this.handleCloseModal8}
            contentLabel="Minimal Modal Example"
          >
            <div className="modal-pic">
              <h1 className="img-text">{this.props.items[7].title}</h1>
              <img className="img" src={this.props.items[7].pic}></img>
            </div>
            <h1 className="info-txt">{this.props.items[8].info}</h1>
          </ReactModal>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => {
  return {
    items: reduxState.cardsReducer.items,
  };
};
export default connect(mapStateToProps, {
  getItems,
})(Home);
