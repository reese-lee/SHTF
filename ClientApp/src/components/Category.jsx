import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Category(props) {

  return (
    <div className="buttonDiv">
      <button className="splashButtons"><Link to={`/${props.name}`}>{props.name}</Link></button>
      <br></br>
    </div>
  );
}

export default Category;

Category.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  // currentRouterPath: PropTypes.string.isRequired
}
