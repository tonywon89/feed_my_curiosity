var React = require("react");
var hashHistory = require("react-router").hashHistory;

var FeedStore = require("../../stores/feed_store");
var FeedClientActions = require("../../actions/feed/feed_client_actions");
var FeedIndexItem = require("./feed_index_item");

var FeedIndex = React.createClass({

  getInitialState: function () {
    return { feeds: FeedStore.all() };
  },

  componentDidMount: function () {
    this.listener = FeedStore.addListener(this._onFeedChange);
    if (this.state.feeds.length === 0) {
      FeedClientActions.fetchFeeds();
    }
  },

  componentWillMount: function () {
    if (!this.props.currentUser) {
      hashHistory.push("/");
    }
  },

  componentWillReceiveProps: function (newProps) {
    if (!newProps.currentUser) {
      hashHistory.push("/");
    }
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onFeedChange: function () {
    this.setState({ feeds: FeedStore.all() });
  },

  render: function () {
    var feeds = this.state.feeds;
    var content;

    if (feeds.length !== 0) {
      var self = this;
      content = feeds.map(function(feed) {
        return (
          <FeedIndexItem key={feed.id}
                         feed={feed}
                         displayAddFeed={self.props.displayAddFeed}
                         displayPopOutDetail={self.props.displayPopOutDetail}/>
        );
      });
    } else {
      content = "Fetching feeds...";
    }

    return (
      <div className="feed-index">
        {content}
      </div>
    );
  }
});

module.exports = FeedIndex;
