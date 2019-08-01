import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import SupplyCheckBox from './SupplyCheckBox';

function Item(props) {

  return (
    <div className="contactDiv">
      <SupplyCheckBox message={props.name} />
    </div>
  );
}

export default Item;

Item.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  // currentRouterPath: PropTypes.string.isRequired
}
