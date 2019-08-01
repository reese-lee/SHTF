import React, { Component } from 'react';
import './Home.css';
import { Layout } from './Layout';
import Food from './Food';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SupplyCheckBox from './SupplyCheckBox';

function FoodList(props) {

    return (
      <Layout>
      <div>
        <h1 className="title4">Food</h1>
          <div className="checkboxDiv">

            {props.foods.map(food => {
              return <Food name={food.foodName}
              id={food.foodId}
              key={food.id} />
          })} 
          </div>
          <div className="buttonDiv">
            <button className="listsButton"><Link to='/Lists'>Back to Lists</Link></button>
          </div>
      </div>
      </Layout>
    )

}

export default FoodList;

FoodList.propTypes = {
  foods: PropTypes.array
}
