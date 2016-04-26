var React = require('react');
var UserClientActions = require('../../actions/user/user_client_actions');
var UserStore = require("../../stores/user_store");

var SignUpForm = React.createClass({
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

    UserClientActions.createUser(user);
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
        <input type="submit" value="Satisfy Thy Curiosity" />
      </form>
    );
  }
});

module.exports = SignUpForm;
