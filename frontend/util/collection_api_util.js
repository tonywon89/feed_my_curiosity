var CollectionServerActions = require("../actions/collection/collection_server_actions");
var ErrorServerActions = require("../actions/error/error_server_actions");

var CollectionApiUtil = {
  fetchCollections: function () {
    $.ajax({
      type: "GET",
      url: "api/collections",
      success: function (collections) {
        CollectionServerActions.receiveCollections(collections);
      },
      error: function (errors) {
        ErrorServerActions.receiveErrors(errors.responseJSON);
      }
    });
  }
};

module.exports = CollectionApiUtil;
