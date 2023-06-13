import React from 'react';
import ButtonComponent from './ButtonComponent';

class Hola extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clickedNumber: null,
    };
  }

  handleButtonClick = (number) =>{
    this.setState({clickedNumber: number});
  };

  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="row row-cols-2">
            <div className="col"><ButtonComponent type="button" className="btn btn-outline-danger w-100 my-btn" text="1"  click={this.handleButtonClick}>1</ButtonComponent></div>
            <div className="col"><ButtonComponent type="button" className="btn btn-outline-success w-100" text="2" click={this.handleButtonClick}>2</ButtonComponent></div>
            <div className="col"><ButtonComponent type="button" className="btn btn-outline-danger w-100" text="2" click={this.handleButtonClick}>2</ButtonComponent></div>
            <div className="col"><ButtonComponent type="button" className="btn btn-outline-success w-100" text="4" click={this.handleButtonClick}>4</ButtonComponent></div>
            <div className="col"><ButtonComponent type="button" className="btn btn-outline-danger w-100" text="3" click={this.handleButtonClick}>3</ButtonComponent></div>
            <div className="col"><ButtonComponent type="button" className="btn btn-outline-success w-100" text="6" click={this.handleButtonClick}>6</ButtonComponent></div>
            <div className="col"><ButtonComponent type="button" className="btn btn-outline-danger w-100" text="4" click={this.handleButtonClick}>4</ButtonComponent></div>
            <div className="col"><ButtonComponent type="button" className="btn btn-outline-success w-100" text="8" click={this.handleButtonClick}>8</ButtonComponent></div>
            <div className="col"><ButtonComponent type="button" className="btn btn-outline-danger w-100" text="5" click={this.handleButtonClick}>5</ButtonComponent></div>
            <div className="col"><ButtonComponent type="button" className="btn btn-outline-success w-100" text="10" click={this.handleButtonClick}>10</ButtonComponent></div>
            <div className="col"><ButtonComponent type="button" className="btn btn-outline-danger w-100" text="6" click={this.handleButtonClick}>6</ButtonComponent></div>
            <div className="col"><ButtonComponent type="button" className="btn btn-outline-success w-100" text="12" click={this.handleButtonClick}>12</ButtonComponent></div>
          </div>
        </div>
        <div className="container text-center">
          {this.state.clickedNumber && (
            <div className="row">
              <div className="col">
                You have clicked {this.state.clickedNumber}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Hola;
