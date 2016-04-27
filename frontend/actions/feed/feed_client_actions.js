var FeedApiUtil = require("../../util/feed_api_util");

var FeedClientActions = {
  fetchFeeds: function () {
    FeedApiUtil.fetchFeeds();
  },

  fetchFeed: function (id) {
    FeedApiUtil.fetchFeed(id);
  }
};

module.exports = FeedClientActions;
