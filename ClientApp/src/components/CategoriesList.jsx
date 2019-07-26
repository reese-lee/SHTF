import React, { Component } from 'react';
import './Home.css';
import { Layout } from './Layout';

export class Lists extends Component {
  static displayName = Lists.name;

  render() {
    return (
      <Layout>
      <div>
        <h1 className="title3">Lists</h1>
          <div className="buttonDiv">
            <button className="splashButtons">Bugout Bag</button><br/>
            <button className="splashButtons">Food</button><br/>
            <button className="splashButtons">other supplies</button>
          </div>
      </div>
      </Layout>
    )
  }
}
