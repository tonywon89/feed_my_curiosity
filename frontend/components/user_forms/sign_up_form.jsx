var React = require('react');
var UserClientActions = require('../../actions/user/user_client_actions');
var ErrorServerActions = require("../../actions/error/error_server_actions");
var UserStore = require("../../stores/user_store");

var SignUpForm = React.createClass({
  getInitialState: function () {
    return { username: "", password: "" };
  },

  usernameChange: function (event) {
    this.setState({ username: event.target.value });
  },

  passwordChange: function (event) {
    this.setState({ password: event.target.value });
  },

  handleSubmit: function (event) {
    event.preventDefault();

    var error;
    if (this.state.username === "") {
      error = [{error_message: "Username cannot be blank"}];
      ErrorServerActions.receiveUserErrors(error);
    } else if (this.state.password.length < 6) {
      error = [{error_message: "Password is too short (minimum is 6 characters)"}];
      ErrorServerActions.receiveUserErrors(error);
   } else {
      var user = {
        username: this.state.username,
        password: this.state.password
      };

      UserClientActions.createUser(user);
    }

  },

  render: function () {
    return (
      <div className="auth-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 placeholder="Username"
                 onChange={this.usernameChange}
                 value={this.state.username}/>
          <input type="password"
                 placeholder="Password"
                 onChange={this.passwordChange}
                 value={this.state.password}/>
          <input className="modal-submit-btn" type="submit" value="Satisfy Thy Curiosity" />
        </form>
      </div>
    );
  }
});

module.exports = SignUpForm;
