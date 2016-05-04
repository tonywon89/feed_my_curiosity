var AppDispatcher = require("../../dispatcher/dispatcher");
var SavedArticleConstants = require("../../constants/saved_article_constants");

var SavedArticleServerActions = {
  receiveArticles: function (articles) {
    AppDispatcher.dispatch({
      actionType: SavedArticleConstants.SAVED_ARTICLES_RECEIVED,
      articles: articles
    });
  }
};

module.exports = SavedArticleServerActions;
