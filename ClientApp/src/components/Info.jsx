import React, { Component } from 'react';
import './Home.css';
import { Layout } from './Layout';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

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
            <button className="splashButtons"><a href="https://earthquaketrack.com/us-or-portland/recent">Latest Earthquakes</a></button><br/>
            <button className="splashButtons"><a href="https://gis.dogami.oregon.gov/maps/hazvu/">Statewide Geohazards Viewer</a></button><br/>
            <button className="splashButtons"><a href="https://katu.com/news/local/there-are-dozens-of-earthquake-faults-across-oregon-including-one-through-portland">Oregon Fault Lines</a></button><br/>
            <button className="splashButtons"><a href="https://www.pdxmonthly.com/articles/2018/2/2/the-big-one-is-coming-what-will-happen-to-portland">What will Happen to Portland?</a></button><br/>
            <button className="splashButtons"><a href="https://projects.oregonlive.com/maps/earthquakes/buildings/">Vulnerable Buildings</a></button><br/>
            <button className="splashButtons"><a href="https://www.opb.org/news/series/unprepared/">Will We Be Ready?</a></button><br/>
          </div>


        </div>
      </Layout>
    );
  }
}
