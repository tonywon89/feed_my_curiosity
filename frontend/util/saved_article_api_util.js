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
  }
};

module.exports = SavedArticleApiUtil;
