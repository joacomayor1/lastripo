import React, { useState } from 'react';

class Compo extends React.Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="row row-cols-2">
            <button type="button" className="col btn btn-outline-success" text="1">1</button>
            <button type="button" className="col btn btn-outline-success" text="2">2</button>
          </div>
        </div>
        <div className="container text-center">
          <div className="row row-cols-2">
            <button type="button" class="col "className="col btn btn-outline-success" text="2">2</button>
            <button type="button" className="col btn btn-outline-success" text="4">4</button>
          </div>
        </div>
        <div className="container text-center">
          <div className="row row-cols-2">
            <button type="button" className="col btn btn-outline-success" text="3">3</button>
            <button type="button" className="col btn btn-outline-success" text="6">6</button>
          </div>
        </div>
      </div>
    );
  }
}


export default Compo;