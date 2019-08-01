import React, { Component } from 'react';
import './Home.css';
import { Layout } from './Layout';
import Contact from './Contact';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ContactsList(props) {

    return (
      <Layout>
      <div>
        <h1 className="title4">Contacts</h1>
          <div>
            {props.contacts.map(contact => {
              return <Contact name={contact.contactName}
              note={contact.contactNote}
              id={contact.contactId}
              key={contact.id} />
            })}
          </div>
          <div className="buttonDiv">
            <button className="listsButton"><Link to='/Lists'>Back to Lists</Link></button>
          </div>
      </div>
      </Layout>
    )

}

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array
}
