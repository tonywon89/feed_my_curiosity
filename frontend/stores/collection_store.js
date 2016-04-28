var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");
var CollectionConstants = require("../constants/collection_constants");

var CollectionStore = new Store(AppDispatcher);

var _collections = {};

var resetCollections = function (collections) {
  _collections = {};
  collections.forEach(function(collection) {
    _collections[collection.id] = collection;
  });

  CollectionStore.__emitChange();
};

CollectionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CollectionConstants.COLLECTIONS_RECEIVED:
      resetCollections(payload.collections);
      break;
  }
};

module.exports = CollectionStore;
