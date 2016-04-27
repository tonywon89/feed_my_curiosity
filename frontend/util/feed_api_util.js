var FeedServerActions = require("../actions/feed/feed_server_actions");

var FeedApiUtil = {
  fetchFeeds: function () {
    $.ajax({
      type: "GET",
      url: "api/feeds",
      success: function (feeds) {
        FeedServerActions.receiveFeeds(feeds);
      }
    });
  },

  fetchFeed: function (id) {
    $.ajax({
      type: "GET",
      url: "api/feeds/" + id,
      success: function (feed) {
        FeedServerActions.receiveSingleFeed(feed);
      }
    });
  }
};

module.exports = FeedApiUtil;
