var React = require("react");

var ArticleIndexItem = require("./article_index_item");
var FeedStore = require("../../stores/feed_store");

var ArticleIndex = React.createClass({
  render: function () {
    var self = this;
    var feed, entries, content;
    if (this.props.feed) {
      feed = FeedStore.find(this.props.feed.id);
      entries = feed.entries.map(function(entry, i) {
        return <ArticleIndexItem key={i} entry={entry} displayPopOutDetail={self.props.displayPopOutDetail}  />;
      });
      content = (
        <div className="article-index">
          {entries}
        </div>
      );
    } else if (this.props.entries) {
      entries = this.props.entries.map(function(entry, i) {
        return <ArticleIndexItem key={i} entry={entry} displayPopOutDetail={self.props.displayPopOutDetail} />;
      });
      content = (
        <div className="article-index">
          {entries}
        </div>
      );
    }

    return (
      <div>
        {content}
      </div>
    );
  }
});

module.exports = ArticleIndex;
