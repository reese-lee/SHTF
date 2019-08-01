import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Contact(props) {

  return (
    <div className="contactDiv">
      <p><strong>{props.name}</strong>
      <br/>
      <strong>Notes:</strong> {props.note}</p>
    </div>
  );
}

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  // currentRouterPath: PropTypes.string.isRequired
}
