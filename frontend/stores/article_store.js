var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");

var SavedArticleConstants = require("../constants/saved_article_constants");

var _articles = {};

var ArticleStore = new Store(AppDispatcher);

var addArticles = function (articles) {
  articles.forEach(function (article) {
    _articles[article.id] = article;
  });
  ArticleStore.__emitChange();
};

ArticleStore.all = function () {
  return Object.keys(_articles).map(function(id) {
    return _articles[id];
  });
};

ArticleStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SavedArticleConstants.SAVED_ARTICLES_RECEIVED:
      addArticles(payload.articles);
      break;
  }
};

module.exports = ArticleStore;
