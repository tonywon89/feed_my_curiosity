var React = require("react");
var hashHistory = require("react-router").hashHistory;

var FeedPopOutHeader = React.createClass({
  handleRedirect: function () {
    this.props.closePopOutDetail();
    hashHistory.push("/feeds/" + this.props.feed.id);
  },

  handleAddClick: function (event) {
    event.preventDefault();
    this.props.displayAddFeed(event.target.value);
  },

  render: function () {
    var feed = this.props.feed;

    return (
      <div className="feed-pop-out-header">
        <div>
          <h1 onClick={this.handleRedirect}>{feed.title}</h1>
          <button onClick={this.handleAddClick}
                  value={feed.id}
                  className="add-feed-btn">
              Add Feed
          </button>
        </div>
        <h3><a href={feed.url}>{feed.description}</a></h3>

      </div>
    );
  }
});

module.exports = FeedPopOutHeader;
