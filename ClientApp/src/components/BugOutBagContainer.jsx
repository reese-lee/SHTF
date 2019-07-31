import React from 'react';
import PropTypes from 'prop-types';

function BugOutBagContainer(props) {

  return (
    <div className="buttonDiv">
      <button className="splashButtons"><Link to={`/${props.name}/${props.id}`}>{props.name}</Link></button>
      <br></br>
    </div>
  );
}

export default BugOutBagContainer;

BugOutBagContainer.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  amount: PropTypes.number,
  done: PropTypes.bool,
  catId: PropTypes.number
  // currentRouterPath: PropTypes.string.isRequired
}
