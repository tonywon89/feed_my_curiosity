var React = require("react");

var FeedStore = require("../../stores/feed_store");

var FeedDetail = React.createClass({
  render: function () {
    var feed = FeedStore.find(this.props.params.feedId);

    var content;
    if (feed) {
      content = <h1>{feed.title}</h1>;
    }

    return (
      <div>
        This is a FeedDetail;
        {content}
      </div>
    );
  }
});

module.exports = FeedDetail;
