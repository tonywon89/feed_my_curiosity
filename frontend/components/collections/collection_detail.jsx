var React = require("react");
var hashHistory = require("react-router").hashHistory;

var CollectionStore = require("../../stores/collection_store");
var FeedStore = require("../../stores/feed_store");

var ArticleIndex = require("../articles/article_index");
var FeedDetail = require("../feeds/feed_detail");

var CollectionDetail = React.createClass({
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

  render: function () {
    var collection = CollectionStore.find(this.props.params.collectionId);

    var collectionName, content, feeds;
    if (collection) {
      collectionName = <h1>{collection.name}</h1>;
      feeds = collection.feeds.map(function(feed) {
        return FeedStore.find(feed.id);
      });

      var todayEntries = [];

      feeds.forEach(function (feed) {
        todayEntries = todayEntries.concat(getTodayEntries(feed));
      });
      if (todayEntries.length !== 0) {
        content = <ArticleIndex entries={todayEntries} />;
      } else {
        content = <p>There are no articles for today in this collection.</p>;
      }
    }

    return (
      <div className="collection-detail">
        {collectionName}
        <h3>TODAY</h3>
        <div className="collection-detail-articles">

          {content}
        </div>
      </div>
    );
  }
});

var getTodayEntries = function (feed) {
  var todayEntries = [];
  var entries = feed.entries;
  for (var i = 0; i < entries.length; i++) {
    if (isToday(new Date(entries[i].published))) {
      todayEntries.push(entries[i]);
    } else {
      break;
    }
  }
  return todayEntries;
};

var isToday = function (date) {
  var today = new Date();
  return (today.getMonth() === date.getMonth() &&
      today.getDay() === date.getDay() &&
      today.getYear() === date.getYear());
};

module.exports = CollectionDetail;
