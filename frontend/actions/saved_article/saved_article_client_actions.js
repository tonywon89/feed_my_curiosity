var SavedArticleApiUtil = require("../../util/saved_article_api_util");

var SavedArticleClientActions = {
  fetchArticles: function () {
    SavedArticleApiUtil.fetchArticles();
  },

  saveArticle: function (article) {
    SavedArticleApiUtil.createArticle(article);
  },

  unsaveArticle: function (id) {
    SavedArticleApiUtil.deleteArticle(id);
  }
};

module.exports = SavedArticleClientActions;
