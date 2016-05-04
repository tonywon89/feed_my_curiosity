var SavedArticleApiUtil = require("../../util/saved_article_api_util");

var SavedArticleClientActions = {
  fetchArticles: function () {
    SavedArticleApiUtil.fetchArticles();
  },

  createArticle: function (article) {
    SavedArticleApiUtil.createArticle(article);
  },

  deleteArticle: function (id) {
    SavedArticleApiUtil.deleteArticle(id);
  }
};

module.exports = SavedArticleClientActions;
