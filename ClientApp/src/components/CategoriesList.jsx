import React, { Component } from 'react';
import './Home.css';
import { Layout } from './Layout';
import Category from './Category';
import PropTypes from 'prop-types';

function CategoriesList(props) {

    return (
      <Layout>
      <div>
        <h1 className="title3">Lists</h1>

        <div>
          {props.categories.map(category => {
            return <Category name={category.name}
            id={category.id}
            key={category.id} />
          })}
        </div>
      </div>
      </Layout>
    )

}

export default CategoriesList;

CategoriesList.propTypes = {
  categories: PropTypes.array
}
