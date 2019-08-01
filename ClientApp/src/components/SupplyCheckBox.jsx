import React from 'react';
import './Home.css';
import { Layout } from './Layout';
import PropTypes from 'prop-types';

class SupplyCheckBox extends React.Component {
  constructor (props){
    super ();

    this.state = {
      checked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });

  }
  render (){
    let text = this.state.checked ? <strike>{this.props.message}</strike> : this.props.message;
    return (
        <div className="row" id="checkboxDiv">
          <div className="col-md-12" id="checkbox">
            <input type="checkbox" onClick={this.handleClick} />&nbsp;{text}
          </div>
        </div>
    );
  }
}

export default SupplyCheckBox;
