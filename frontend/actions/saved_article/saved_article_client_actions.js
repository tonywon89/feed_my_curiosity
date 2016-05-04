var SavedArticleApiUtil = require("../../util/saved_article_api_util");

var SavedArticleClientActions = {
  fetchArticles: function () {
    SavedArticleApiUtil.fetchArticles();
  }
};

module.exports = SavedArticleClientActions;
