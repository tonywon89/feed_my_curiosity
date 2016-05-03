var React = require("react");

var CurrentUserStateMixn = require("../mixins/current_user_state_mixin");
var App = require("./app");

var Home = React.createClass({

  render: function () {

    var content;
    var currentUser = this.props.currentUser;

    if (currentUser) {
      content = (
        <div>
          Welcome, {currentUser.username}!
        </div>
      );
    } else {
      content = <button className="getting-started" onClick={this.props.openLoginModal}>Get Started</button>;
    }

    return (
      <div className="home">
        <header>
          <h1 className="header-text">Feed My Curiosity</h1>
          {content}
        </header>
      </div>
    );
  }
});

module.exports = Home;
