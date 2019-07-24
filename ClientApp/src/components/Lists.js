import React, { Component } from 'react';
import './Home.css';
import { Layout } from './Layout';Í 

export class Lists extends Component {
  static displayName = Lists.name;

  render() {
    return (
      <Layout>
      <div>
        <h1 className="title3">Lists</h1>
      </div>
      </Layout>
    )
  }
}
