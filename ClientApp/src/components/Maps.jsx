import React, { Component } from 'react';
import './Home.css';
import { Layout } from './Layout';
import { Link } from 'react-router-dom';

export class Maps extends Component {
  static displayName = Maps.name;

  render () {
    return (
      <Layout>
      <div>
        <h1 className="title3">Maps</h1>
          <div>
            <iframe src="https://maps.google.com/maps?q=portland%20or&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{width:"100%", height:"400px", frameborder:"none", border:0}} allowFullScreen></iframe>
          </div>
          <div className="buttonDiv">
            <button className="splashButtons"><Link to="/DangerZone">Danger Zones</Link></button><br/>
          </div>
      </div>
      </Layout>
    );
  }
}
