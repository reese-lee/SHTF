import React, { Component } from 'react';
import './Home.css';
import { Layout } from './Layout';

export class Maps extends Component {
  static displayName = Maps.name;

  render () {
    return (
      <Layout>
      <div>
        <h1 className="title3">Maps</h1>
          <div>
            MAPS WILL GO HERE
          </div>
          <div className="buttonDiv">
            <button className="splashButtons">Danger</button><br/>
            <button className="splashButtons">Safe</button>
          </div>
      </div>
      </Layout>
    );
  }
}
