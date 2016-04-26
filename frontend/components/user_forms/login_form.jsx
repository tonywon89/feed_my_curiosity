var React = require('react');
var hashHistory = require('react-router').hashHistory;
var UserClientActions = require('../../actions/user/user_client_actions');

var LoginForm = React.createClass({
  getInitialState: function () {
    return { email: "", password: "" };
  },

  emailChange: function (event) {
    this.setState({ email: event.target.value });
  },

  passwordChange: function (event) {
    this.setState({ password: event.target.value });
  },

  handleSubmit: function (event) {
    event.preventDefault();

    var user = {
      email: this.state.email,
      password: this.state.password
    };
    UserClientActions.login(user);

  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               placeholder="Email"
               onChange={this.emailChange}
               value={this.state.email}/>
        <input type="password"
               placeholder="Password"
               onChange={this.passwordChange}
               value={this.state.password}/>
        <input type="submit" value="Log In and Begin Feeding" />
      </form>
    );
  }
});

module.exports = LoginForm;
