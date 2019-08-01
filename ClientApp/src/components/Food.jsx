import React from 'react';
import PropTypes from 'prop-types';
import SupplyCheckBox from './SupplyCheckBox';

function Food(props) {

  return (
    <div>
      <div className="contactDiv">
        <SupplyCheckBox message={props.name} />
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
