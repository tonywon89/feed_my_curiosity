var AppDispatcher = require("../../dispatcher/dispatcher");
var CollectionConstants = require("../../constants/collection_constants");

var CollectionServerActions = {
  receiveCollections: function (collections) {
    AppDispatcher.dispatch({
      actionType: CollectionConstants.COLLECTIONS_RECEIVED,
      collections: collections
    });
  }
};

module.exports = CollectionServerActions;
