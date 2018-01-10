import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';


class Profile extends Component{
  render(){
    return(
      <div>
        {this.props.userData.name}
      </div>

    )
  }
}


export default Profile
