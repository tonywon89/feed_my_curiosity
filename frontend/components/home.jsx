var React = require("react");
var Link = require("react-router").Link;

var CurrentUserStateMixn = require("../mixins/current_user_state_mixin");
var App = require("./app");

var Home = React.createClass({

  render: function () {

    var content;
    var currentUser = this.props.currentUser;

    if (currentUser) {
      content = (
        <div>
          You are logged in as {currentUser.email}
          <button onClick={this.props.logOut}>Log out</button>
        </div>
      );
    } else {
      content = <button className="getting-started" onClick={this.props.openLoginModal}>Get Started</button>;
    }

    return (
      <div>
        <header>
          <h1 className="header-text">Feed My Curiosity</h1>
          {content}
        </header>
        <Link to="/feeds">Fetch the feeds</Link>
      </div>
    );
  }
});

module.exports = Home;
