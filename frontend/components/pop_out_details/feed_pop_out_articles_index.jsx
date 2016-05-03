var React = require("react");

var FeedPopOutArticleItem = require("./feed_pop_out_article_item");

var FeedPopOutArticlesIndex = React.createClass({
  render: function () {
    var entries = this.props.feed.entries;

    var displayEntries = [];
    for (var i = 0; i < 5; i++) {
      displayEntries.push(<FeedPopOutArticleItem key={i} entry={entries[i]}/>);
    }

    return (
      <div className="feed-pop-out-article-index">
        <h3>RECENT ARTICLES</h3>
        <ul>
          {displayEntries}
        </ul>

      </div>
    );
  }
});

module.exports = FeedPopOutArticlesIndex;
