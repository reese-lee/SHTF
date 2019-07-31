import React from 'react';
import './Home.css';
import { Layout } from './Layout';
import { Link } from 'react-router-dom';
import dangerZones from './../images/dangerzones.png';

class MapDanger extends React.Component {
  static displayName = MapDanger.name;

  render () {
    return (
      <Layout>
      <div>
        <h1 className="title3">Danger Zones</h1>
          <div>
            <img src={dangerZones} alt="Danger Zones" style={{ width: "100%" }}/>
          </div>
          <div className="buttonDiv">
            <button className="splashButtons"><Link to='/maps'>Back to Maps</Link></button><br/>ÍÍ
          </div>
      </div>
      </Layout>
    );
  }
}

export default MapDanger;
