var AppDispatcher = require("../../dispatcher/dispatcher");
var FeedConstants = require("../../constants/feed_constants");

var FeedServerActions = {
  receiveFeeds: function (feeds) {
    AppDispatcher.dispatch({
      actionType: FeedConstants.FEEDS_RECEIVED,
      feeds: feeds
    });
  },

  receiveSingleFeed: function (feed) {
    AppDispatcher.dispatch({
      actionType: FeedConstants.SINGLE_FEED_RECEIVED,
      feed: feed
    });
  }
};

module.exports = FeedServerActions;
