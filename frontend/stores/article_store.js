var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");

var SavedArticleConstants = require("../constants/saved_article_constants");

var _articles = {};

var ArticleStore = new Store(AppDispatcher);

var resetArticles = function (articles) {
  articles.forEach(function (article) {
    _articles[article.id] = article;
  });
  ArticleStore.__emitChange();
};

var updateArticle = function (article) {
  _articles[article.id] = article;
  ArticleStore.__emitChange();
};

ArticleStore.all = function () {
  return Object.keys(_articles).map(function(id) {
    return _articles[id];
  });
};

ArticleStore.find = function (id) {
  return _articles[id];
};

ArticleStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SavedArticleConstants.SAVED_ARTICLES_RECEIVED:
      resetArticles(payload.articles);
      break;
    case SavedArticleConstants.ARTICLE_RECEIVED:
      updateArticle(payload.article);
      break;
  }
};

module.exports = ArticleStore;
