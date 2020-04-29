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
              src="https://res.cloudinary.com/kevin14/image/upload/v1588109118/v6mdboyph5fhm4nuhcxd.jpg"
            ></img>
            <h1 className="img-text2">Social Issue Category Examples</h1>
          </section>
          <section className="cards-sec">
            <div className="cards" onClick={this.handleOpenModal}>
              <img className="card-pic" src={this.props.items[0].pic}></img>
              <h1>{this.props.items[0].title}</h1>
            </div>
            <div>
              <ReactModal
                isOpen={this.state.showModal}
                className="Modal"
                onRequestClose={this.handleCloseModal}
                contentLabel="Minimal Modal Example"
              >
              
              </ReactModal>
            </div>
            <div className="cards" onClick={this.handleOpenModal}>
              <img className="card-pic" src={this.props.items[1].pic}></img>
              <h1>{this.props.items[1].title}</h1>
            </div>
            <div className="cards" onClick={this.handleOpenModal}>
              <img className="card-pic" src={this.props.items[2].pic}></img>
              <h1>{this.props.items[2].title}</h1>
            </div>
            <div className="cards" onClick={this.handleOpenModal}>
              <img className="card-pic" src={this.props.items[3].pic}></img>
              <h1>{this.props.items[3].title}</h1>
            </div>
            <div className="cards" onClick={this.handleOpenModal}>
              <img className="card-pic" src={this.props.items[4].pic}></img>
              <h1>{this.props.items[4].title}</h1>
            </div>
            <div className="cards" onClick={this.handleOpenModal}>
              <img className="card-pic" src={this.props.items[5].pic}></img>
              <h1>{this.props.items[5].title}</h1>
            </div>
            <div className="cards" onClick={this.handleOpenModal}>
              <img className="card-pic" src={this.props.items[6].pic}></img>
              <h1>{this.props.items[6].title}</h1>
            </div>
            <div className="cards" onClick={this.handleOpenModal}>
              <img className="card-pic" src={this.props.items[7].pic}></img>
              <h1>{this.props.items[7].title}</h1>
            </div>
          </section>
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
