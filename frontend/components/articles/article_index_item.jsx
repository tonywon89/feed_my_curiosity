var React = require("react");

var ParseHTML = require("../../mixins/parse_html_mixin");
var SavedArticleClientActions = require("../../actions/saved_article/saved_article_client_actions");
var ArticleStore = require("../../stores/article_store");

var ArticleIndexItem = React.createClass({
  isArticleSaved: function (article, savedArticles) {
    if (savedArticles) {
      for (var i = 0; i < savedArticles.length; i++) {
        if (article.url === savedArticles[i].url) {
          return true;
        }
      }
    }
    return false;
  },

  getInitialState: function () {
    return { isSaved: this.isArticleSaved(this.props.entry, this.props.savedArticles)};
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ isSaved: this.isArticleSaved(newProps.entry, newProps.savedArticles) });
  },

  handlePopOutClick: function (event) {
    var popOutItem = {type: "article", content: this.props.entry};
    this.props.displayPopOutDetail(popOutItem);
  },

  handleSaveClick: function (event) {
    var article = this.props.entry;

    if (this.state.isSaved) {

      for (var i = 0; i < this.props.savedArticles.length; i++) {
        if (article.url === this.props.savedArticles[i].url) {
          article.id = this.props.savedArticles[i].id
        }
      }
      SavedArticleClientActions.unsaveArticle(article.id);
    } else {
      SavedArticleClientActions.saveArticle(article);
    }
  },

  render: function () {
    var entry = this.props.entry;
    var imageUrl = ParseHTML.getImageUrl(entry);

    var image;
    image = imageUrl ? <img src={imageUrl} /> : <img src="http://dummyimage.com/600x400/46b0a4/414582.png&text=Curiously,+there+is+no+image" />;

    var content = ParseHTML.getContent(entry);

    var saveBtn;
    if (this.state.isSaved) {
      saveBtn = <div className="unsave-btn" onClick={this.handleSaveClick}>Unsave</div>;
    } else {
      saveBtn = <div className="save-btn" onClick={this.handleSaveClick}>Save For Later</div>;
    }

    return (
      <div className="article-index-item" >
        <div className="article-details" onClick={this.handlePopOutClick}>
          <div className="image-wrapper">
            {image}
          </div>
          <div className="header-wrapper">
            <h4>{entry.title}</h4>
          </div>
          <div className="wrapper">
            <p className="article-content">{content}</p>
          </div>
        </div>
        {saveBtn}
      </div>
    );
  }
});

module.exports = ArticleIndexItem;
