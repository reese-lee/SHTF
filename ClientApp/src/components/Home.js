import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
          <div className="headerMain">
            <h4 className="title2">When</h4>
            <h1 className="title">S.H.T.F.</h1>
            <h4 className="title2">...Will you be ready?</h4>
          </div>
          <br/>
          <div className="buttonDiv">
            <button className="splashButtons"><Link to='/maps'>MAPS</Link></button><br/>
            <button className="splashButtons"><Link to='/lists'>LISTS</Link></button><br/>
            <button className="splashButtons"><Link to="/info">INFO</Link></button><br/>
          </div>
      </div>
    );
  }
}
