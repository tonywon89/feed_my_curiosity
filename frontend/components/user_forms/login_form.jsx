var React = require('react');
var UserClientActions = require('../../actions/user/user_client_actions');
var UserStore = require("../../stores/user_store");
var SavedArticleClientActions = require("../../actions/saved_article/saved_article_client_actions");

var LoginForm = React.createClass({
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

    var user = {
      username: this.state.username,
      password: this.state.password
    };

    UserClientActions.login(user);
  },

  guestLogin: function (event) {
    event.preventDefault();
    var username = ["C", "u", "r", "i", "o", "u", "s", "U", "s", "e", "r"];
    var password = ["c", "u", "r", "i", "o", "u", "s"];
    var self = this;
    var currentUsername = "";
    var currentTime = 100;
    username.forEach(function (letter) {
      setTimeout(function () {
        currentUsername += letter;
        self.setState({username: currentUsername});
      }, currentTime);
      currentTime += 100;
    });

    var currentPassword = "";
    password.forEach(function (letter) {
      setTimeout(function () {
        currentPassword += letter;
        self.setState({password: currentPassword});
      }, currentTime);
      currentTime += 100;
    });

    var user = {
      username: this.state.username,
      password: this.state.password
    };

    setTimeout(function () {
      UserClientActions.login({username: self.state.username, password: self.state.password });
    }, currentTime + 100);

  },

  render: function () {
    var errors;

    if (this.props.errors) {
      errors = this.props.errors.map(function(error, i){
        return <li key={i}>{error.error_message}</li>;
      });
    }

    return (
      <div className="auth-form">
        <h3 className="modal-header">Log In</h3>
        <ul>{errors}</ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 placeholder="Username"
                 onChange={this.usernameChange}
                 value={this.state.username}/>
          <input type="password"
                 placeholder="Password"
                 onChange={this.passwordChange}
                 value={this.state.password}/>

          <input className="modal-submit-btn" type="submit" value="Log In" />
          <button onClick={this.guestLogin}>Guest Log In</button>

        </form>

        <pre className="alternative">
          Don't have an account? <a onClick={this.props.openSignupModal}>Sign Up Here</a>
        </pre>
      </div>
    );
  }
});

module.exports = LoginForm;
