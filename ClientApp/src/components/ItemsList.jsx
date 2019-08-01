import React, { Component } from 'react';
import './Home.css';
import { Layout } from './Layout';
import Item from './Item';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ItemsList(props) {

    return (
      <Layout>
      <div>
        <h1 className="title4">Bug Out Bag Items</h1>

        <div>
          {props.items.map(item => {
            return <Item name={item.itemName}
            id={item.itemId}
            key={item.id} />
          })}
        </div>
        <div className="buttonDiv">
          <button className="listsButton"><Link to='/Lists'>Back to Lists</Link></button>
        </div>
      </div>
      </Layout>
    )

}

export default ItemsList;

ItemsList.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number
  // currentRouterPath: PropTypes.string.isRequired
}
