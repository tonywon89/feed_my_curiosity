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
      success: function (createdCollection) {
        CollectionServerActions.receiveCreatedCollection(createdCollection);
      },
      error: function (errors) {
        ErrorServerActions.receiveCollectionErrors(errors.responseJSON);
      }
    });
  },

  updateCollection: function (collection) {
    var feed = {
      add: collection.add,
      remove: collection.remove,
    };
    $.ajax({
      type: "PATCH",
      url: "api/collections/" + collection.id,
      data: { feed: feed },
      success: function (updatedCollection) {
        alert("Updated collection");
      },
      error: function (errors) {
        alert("Failed to update collection");
      }
    });
  }
};

module.exports = CollectionApiUtil;
