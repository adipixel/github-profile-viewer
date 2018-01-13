import React from 'react';

class Search extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value.trim();
    if (!!username) {
      this.props.onFormSubmit(username);
      this.refs.username.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Search GitHub Users</label>
          <input type="text" ref="username" className="form-control"/>
        </form>
      </div>
    );
  }
}

export default Search;
