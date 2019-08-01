import React from 'react';
import PropTypes from 'prop-types';
import SupplyCheckBox from './SupplyCheckBox';

function Supply(props) {

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

export default Supply;

Supply.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
}
