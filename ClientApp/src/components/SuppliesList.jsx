import React, { Component } from 'react';
import './Home.css';
import { Layout } from './Layout';
import Supply from './Supply';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SuppliesList(props) {

    return (
      <Layout>
      <div>
        <h1 className="title4">Supplies</h1>

        <div>
          {props.supplies.map(supply => {
            return <Supply name={supply.supplyName}
            id={supply.supplyId}
            key={supply.id} />
          })}
        </div>
        <div>
          
        </div>
        <div className="buttonDiv">
          <button className="listsButton"><Link to='/Lists'>Back to Lists</Link></button>
        </div>
      </div>
      </Layout>
    )

}

export default SuppliesList;

SuppliesList.propTypes = {
  supplies: PropTypes.array
}
