var React = require("react");
var hashHistory = require("react-router").hashHistory;

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
