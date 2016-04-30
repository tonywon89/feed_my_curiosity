var React = require("react");

var ArticleIndexItem = require("./article_index_item");
var FeedStore = require("../../stores/feed_store");

var ArticleIndex = React.createClass({
  render: function () {
    var feed, entries, content;
    if (this.props.feed) {
      feed = FeedStore.find(this.props.feed.id);
      entries = feed.entries.map(function(entry, i) {
        return <ArticleIndexItem key={i} entry={entry} />;
      });
      content = (
        <div>
          {entries}
        </div>
      );
    }

    return (
      <div className="article-index">
        {content}
      </div>
    );
  }
});

module.exports = ArticleIndex;
