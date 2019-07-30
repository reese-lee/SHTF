import React, { Component } from 'react';
import './Home.css';
import { Layout } from './Layout';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import Collapse from '@kunukn/react-collapse';

export class Info extends Component {
  static displayName = Info.name;

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render () {
    return (
      <Layout>
        <div>
          <h1 className="title3">INFO</h1>

          <div className="buttonDiv">
            <button className="splashButtons" to='/infoOne'>One info</button><br/>
            <button className="splashButtons">Two infos</button><br/>
            <button className="splashButtons">The third info</button><br/>
            <button className="splashButtons">And another one</button><br/>
          </div>


        </div>
      </Layout>
    );
  }
}
