var React = require("react");

var FeedIndexItem = React.createClass({
  render: function () {
    var feed = this.props.feed;
    return (
      <div className="feed-index-item">
        <a href={feed.url}>{feed.title}</a>
        <button className="feed-index-add-btn">Add</button>
        <p>{feed.description}</p>
      </div>
    );
  }
});

module.exports = FeedIndexItem;
