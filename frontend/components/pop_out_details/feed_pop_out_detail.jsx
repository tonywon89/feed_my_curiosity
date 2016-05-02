var React = require("react");

var FeedPopOutDetail = React.createClass({
  render: function () {
    return (
      <div>{this.props.feed.title}</div>
    );
  }
});

module.exports = FeedPopOutDetail;
