var FeedApiUtil = require("../../util/feed_api_util");

var FeedClientActions = {
  fetchFeeds: function () {
    FeedApiUtil.fetchFeeds();
  }
};

module.exports = FeedClientActions;
