var React = require("react");

var CurrentUserStateMixn = require("../mixins/current_user_state_mixin");
var App = require("./app");
var CuriousQuotes = require("../constants/quotes.js");

var Home = React.createClass({

  render: function () {
    var content;
    var currentUser = this.props.currentUser;

    if (currentUser) {
      content = (
        <div className="logged-in-splash">
          <h3>Welcome, {currentUser.username}!</h3>
          <p>Head over to the side bar on the left to get started!</p>
        </div>
      );
    } else {
      var randomIdx = Math.floor(Math.random() * CuriousQuotes.length);
      var quote = CuriousQuotes[randomIdx];
      var quoteAuthor = Object.keys(quote)[0];
      var quoteString = Object.keys(quote).map(function(author) {
        return quote[author];
      })[0];

      content = (
        <div className="splash-content">
          <div className="info">
            A place to store, read, and organize the content you are curious about.
          </div>

          <p className="quote">"{quoteString}"</p>
          <p className="author">-{quoteAuthor}</p>
          <button className="getting-started"
                  onClick={this.props.openLoginModal}>
              Get Started
          </button>
        </div>
      );


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
