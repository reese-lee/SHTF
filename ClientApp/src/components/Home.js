import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div >
        <body>
          <div className="header">
            <h4 className="title2">When</h4>
            <h1 className="title">S.H.T.F.</h1>
            <h4 className="title2">...Will you be ready?</h4>
          </div>
          <br/>
          <div className="buttonDiv">
            <button className="splashButtons">MAPS</button><br/>
            <button className="splashButtons">LISTS</button><br/>
            <button className="splashButtons">INFO</button><br/>
          </div>
        </body>
      </div>
    );
  }
}
