var React = require("react");

var ArticleIndexItem = require("./article_index_item");
var FeedStore = require("../../stores/feed_store");
var SavedArticleClientActions = require("../../actions/saved_article/saved_article_client_actions");
var ArticleStore = require("../../stores/article_store");

var ArticleIndex = React.createClass({
  getInitialState: function () {
    return { savedArticles: ArticleStore.all() };
  },

  componentDidMount: function () {
    this.listener = ArticleStore.addListener(this._onSavedArticlesChange);
    SavedArticleClientActions.fetchArticles();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onSavedArticlesChange: function () {
    this.setState({ savedArticles: ArticleStore.all() });
  },

  render: function () {
    var self = this;
    var feed, entries, content;
    if (this.props.feed) {
      feed = FeedStore.find(this.props.feed.id);
      entries = feed.entries.map(function(entry, i) {
        return (<ArticleIndexItem
                    key={i}
                    entry={entry}
                    displayPopOutDetail={self.props.displayPopOutDetail}
                    savedArticles={self.state.savedArticles} />);
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
