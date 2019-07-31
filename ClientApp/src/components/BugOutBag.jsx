import React from 'react';
import { BugOutBagContainer } from './BugOutBagContainer';

function BugOutBag(props) {

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

export default BugOutBag;

BugOutBag.propTypes = {
  categories: PropTypes.array
}
