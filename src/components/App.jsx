import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import Profile from './github/Profile.jsx'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username : 'adipixel',
      userData : [],
      userData : [],
      perPage : 5
    }
  }
  // get user data from Github
  getUserData(){
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret+'',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({userData: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({username: null});
        alert(err);
      }.bind(this)
    });
  }

  componentDidMount(){
    this.getUserData();
  }

  render(){
    return(
      <div>
        <Profile userData = {this.state.userData} />
      </div>

    )
  }
}

App.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
};

App.defaultProps = {
  clientId: "8e887fb27924db06afb9",
  clientSecret: "0707f1178894f3d343a49a931e63d1c6bdf16309"
};

export default App
