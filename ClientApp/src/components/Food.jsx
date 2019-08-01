import React from 'react';
import PropTypes from 'prop-types';

function Food(props) {

  return (
    <div>
      <div className="contactDiv">
        <p><strong>{props.name}</strong></p>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Food;

Food.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
}
