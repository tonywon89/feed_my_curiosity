var AppDispatcher = require("../../dispatcher/dispatcher");
var SavedArticleConstants = require("../../constants/saved_article_constants");

var SavedArticleServerActions = {
  receiveArticles: function (articles) {
    AppDispatcher.dispatch({
      actionType: SavedArticleConstants.SAVED_ARTICLES_RECEIVED,
      articles: articles
    });
  },

  receiveSavedArticle: function (article) {
    AppDispatcher.dispatch({
      actionType: SavedArticleConstants.ARTICLE_RECEIVED,
      article: article
    });
  }
};

module.exports = SavedArticleServerActions;
