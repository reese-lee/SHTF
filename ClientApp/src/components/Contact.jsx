import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Contact(props) {

  return (
    <div className="buttonDiv">
      {props.name}
      <br/>
      {props.note}
    </div>
  );
}

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  // currentRouterPath: PropTypes.string.isRequired
}
