var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");
var FeedConstants = require("../constants/feed_constants");

var FeedStore = new Store(AppDispatcher);

var _feeds = {};

var addFeeds = function (feeds) {

};

FeedStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FeedConstants.FEEDS_RECEIVED:
      alert("in FeedStore FEEDS_RECEIVED");
      addFeeds(payload.feeds);
      break;
  }
};

module.exports = FeedStore;
