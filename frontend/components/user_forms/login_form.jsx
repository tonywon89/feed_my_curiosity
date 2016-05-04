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
    // SavedArticleClientActions.fetchArticles();
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
          <input className="modal-submit-btn" type="submit" value="Log In and Begin Feeding" />
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
