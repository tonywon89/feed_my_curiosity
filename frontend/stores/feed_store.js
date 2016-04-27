var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");
var FeedConstants = require("../constants/feed_constants");

var FeedStore = new Store(AppDispatcher);

var _feeds = {};
var _feedDetail;

var addFeeds = function (feeds) {
  feeds.forEach(function(feed){
    _feeds[feed.id] = feed;
  });
  FeedStore.__emitChange();
};

var addFeedDetail = function (feed) {
  _feedDetail = feed;
  FeedStore.__emitChange();
};

FeedStore.all = function () {
  return Object.keys(_feeds).map(function(key) {
    return _feeds[key];
  });
};

FeedStore.feedDetail = function () {
  return _feedDetail;
};

FeedStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FeedConstants.FEEDS_RECEIVED:
      addFeeds(payload.feeds);
      break;
    case FeedConstants.SINGLE_FEED_RECEIVED:
      addFeedDetail(payload.feed);
      break;
  }
};

module.exports = FeedStore;
