import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Home.css';

function Item(props) {

  return (
    <div className="contactDiv">
      <p><strong>{props.name}</strong>
      <br/></p>
    </div>
  );
}

export default Item;

Item.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  // currentRouterPath: PropTypes.string.isRequired
}
