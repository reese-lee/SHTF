import React, { Component } from 'react';
import './Home.css';
import { Layout } from './Layout';

export class Info extends Component {
  static displayName = Info.name;

  // constructor (props) {
  //   super(props);
  //   this.state = { currentCount: 0 };
  //   this.incrementCounter = this.incrementCounter.bind(this);
  // }
  //
  // incrementCounter () {
  //   this.setState({
  //     currentCount: this.state.currentCount + 1
  //   });
  // }

  render () {
    return (
      <Layout>
        <div>
          <h1 className="title3">INFO</h1>


        </div>
      </Layout>
    );
  }
}
