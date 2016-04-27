var FeedServerActions = require("../actions/feed/feed_server_actions");

var FeedApiUtil = {
  fetchFeeds: function () {
    $.ajax({
      type: "GET",
      url: "api/feeds",
      success: function (feeds) {
        FeedServerActions.receiveFeeds();
      }
    });
  },

  fetchFeed: function (id) {
    $.ajax({
      type: "GET",
      url: "api/feeds/" + id,
      success: function (feed) {
        alert("Got the feed");
      }
    });
  }
};

module.exports = FeedApiUtil;
