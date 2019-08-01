import React from 'react';
import SupplyCheckBoxList from './SupplyCheckBoxList';
import SupplyCheckBox from './SupplyCheckBox';

let item2 = <SupplyCheckBox message="a new message" />;
let item3 = <SupplyCheckBox message="another message" />;
let item4 = <SupplyCheckBox message="one more task" />;

let allTheThings = [item2, item3, item4];

class AppContainer extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <div>
        <SupplyCheckBoxList count={allTheThings.length} />
      </div>
    );
  }
}

export default AppContainer;
