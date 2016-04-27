var React = require("react");

var FeedIndexItem = React.createClass({
  render: function () {
    var feed = this.props.feed;
    return (
      <div>
        <a href={feed.url}>{feed.title}</a>
        <p>{feed.description}</p>
      </div>
    );
  }
});

module.exports = FeedIndexItem;
