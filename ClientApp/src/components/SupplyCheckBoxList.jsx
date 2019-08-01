import React from 'react';
import SupplyCheckBox from './SupplyCheckBox';
import './Home.css';
import { Layout } from './Layout';
import PropTypes from 'prop-types';

let item2 = <SupplyCheckBox message="Pepper spray" />;
let item3 = <SupplyCheckBox message="GPS" />;
let item4 = <SupplyCheckBox message="Locator beacon" />;
let item5 = <SupplyCheckBox message="Rope" />;
let item6 = <SupplyCheckBox message="Axe" />;
let item7 = <SupplyCheckBox message="Firearm" />;
let item8 = <SupplyCheckBox message="Ammunition" />;
let item9 = <SupplyCheckBox message="Tent" />;
let item10 = <SupplyCheckBox message="Sleeping bag" />;
let item11 = <SupplyCheckBox message="Small mirror" />;
let item12 = <SupplyCheckBox message="Flares" />;
let item13 = <SupplyCheckBox message="Fuel" />;
let item14 = <SupplyCheckBox message="Extra tarps" />;
let item15 = <SupplyCheckBox message="Waterproof matches" />;
let item16 = <SupplyCheckBox message="Rain jacket" />;
let item17 = <SupplyCheckBox message="Gloves" />;
let item18 = <SupplyCheckBox message="Extra socks" />;
let item19 = <SupplyCheckBox message="Gloves" />;
let item20 = <SupplyCheckBox message="Hat/Beanie" />;

let allTheThings = [item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20];

 class SupplyCheckBoxList extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    let items = allTheThings.map(thing => thing);
    return (
      <Layout>
        <div>
        <h1 className="title4">Supplies</h1>
          <div className="checkboxDiv">
            <h4>{items}</h4>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SupplyCheckBoxList;
