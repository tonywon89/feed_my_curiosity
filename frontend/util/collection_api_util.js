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
        ErrorServerActions.receiveCollectionErrors(errors.responseJSON);
      }
    });
  },

  createCollection: function (collection) {
    $.ajax({
      type: "POST",
      url: "api/collections",
      data: { collection: collection},
      success: function () {
        alert("Collection creation and feed addition was a success!");
      },
      error: function (errors) {
        ErrorServerActions.receiveCollectionErrors(errors.responseJSON);
      }
    });
  }
};

module.exports = CollectionApiUtil;
