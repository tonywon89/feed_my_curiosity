var AppDispatcher = require("../../dispatcher/dispatcher");
var CollectionConstants = require("../../constants/collection_constants");

var CollectionServerActions = {
  receiveCollections: function (collections) {
    AppDispatcher.dispatch({
      actionType: CollectionConstants.COLLECTIONS_RECEIVED,
      collections: collections
    });
  },

  receiveSingleCollection: function (collection) {
    AppDispatcher.dispatch({
      actionType: CollectionConstants.SINGLE_COLLECTION_RECEIVED,
      collection: collection
    });
  }
};

module.exports = CollectionServerActions;
