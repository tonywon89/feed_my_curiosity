var React = require("react");

var ArticleStore = require("../../stores/article_store");
var SavedArticleClientActions = require("../../actions/saved_article/saved_article_client_actions");
var ArticleIndex = require("../articles/article_index");

var SavedArticleIndex = React.createClass({
  getInitialState: function () {
    return { articles: ArticleStore.all() };
  },

  componentDidMount: function () {
    this.listener = ArticleStore.addListener(this._onChange);
    SavedArticleClientActions.fetchArticles();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState( { articles: ArticleStore.all() });
  },

  render: function () {
    return (
      <div className="saved-article-index">
        <h1>SAVED ARTICLES</h1>
        <ArticleIndex entries={this.state.articles} displayPopOutDetail={this.props.displayPopOutDetail} />
      </div>
    );
  }
});

module.exports = SavedArticleIndex;
