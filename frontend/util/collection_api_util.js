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
        ErrorServerActions.receiveCollectionErrors(errors.responseJSON);
      }
    });
  },

  getCollection: function (id) {
    $.ajax({
      type: "GET",
      url: "api/collections/" + id,
      success: function (collection) {
        CollectionServerActions.receiveSingleCollection(collection);
      },
      error: function (errors) {
        ErrorServerActions.receiveCollectionErrors(errors.responseJSOn);
      }
    });
  }
};

module.exports = CollectionApiUtil;
