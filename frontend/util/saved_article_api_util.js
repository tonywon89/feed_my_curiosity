var ErrorServerActions = require("../actions/error/error_server_actions");
var SavedArticleServerActions = require("../actions/saved_article/saved_article_server_actions");

var SavedArticleApiUtil = {
  fetchArticles: function () {
    $.ajax({
      type: "GET",
      url: "api/articles",
      success: function (articles) {
        SavedArticleServerActions.receiveArticles(articles);
      },
      error: function (errors) {
        ErrorServerActions.receiveCollectionErrors(errors.responseJSON);
      }
    });
  },

  createArticle: function (article) {
    $.ajax({
      type: "POST",
      url: "api/articles",
      data: { article: article},
      success: function (savedArticle) {
        SavedArticleServerActions.receiveSavedArticle(savedArticle);
      },
      error: function (errors) {
        ErrorServerActions.receiveCollectionErrors(errors.responseJSON);
      }
    });
  },

  deleteArticle: function (id) {
    $.ajax({
      type: "DELETE",
      url: "api/articles/" + id.toString(),
      success: function (deletedArticle) {
        SavedArticleServerActions.removeSavedArticle(deletedArticle);
      },
      error: function (errors) {
        ErrorServerActions.receiveCollectionErrors(errors.responseJSON);
      }
    });
  }
};

module.exports = SavedArticleApiUtil;
