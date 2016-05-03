var React = require("react");

var FeedPopOutArticleItem = require("./feed_pop_out_article_item");

var FeedPopOutArticlesIndex = React.createClass({
  render: function () {
    var entries = this.props.entries;

    var displayEntries = [];
    for (var i = 0; i < 5; i++) {
      displayEntries.push(<FeedPopOutArticleItem key={i} entry={entries[i]}/>);
    }

    return (
      <ul className="feed-pop-out-article-index">
        {displayEntries}
      </ul>
    );
  }
});

module.exports = FeedPopOutArticlesIndex;
