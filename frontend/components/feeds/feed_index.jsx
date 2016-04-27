var React = require("react");
var FeedStore = require("../../stores/feed_store");
var FeedClientActions = require("../../actions/feed/feed_client_actions");
var FeedIndexItem = require("./feed_index_item");

var FeedIndex = React.createClass({
  getInitialState: function () {
    return { feeds: FeedStore.all() };
  },

  componentDidMount: function () {
    this.listener = FeedStore.addListener(this._onChange);
    FeedClientActions.fetchFeeds();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({ feeds: FeedStore.all() });
  },

  render: function () {
    var feeds = this.state.feeds;
    if (feeds.length !== 0) {
      feeds = feeds.map(function(feed) {
        return <FeedIndexItem key={feed.id} feed={feed} />;
      });
    }
    return (
      <div>
        This is the feeds index
        {feeds}
      </div>
    );
  }
});

module.exports = FeedIndex;
