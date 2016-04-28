var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");
var CollectionConstants = require("../constants/collection_constants");

var CollectionStore = new Store(AppDispatcher);

var _collections = {};
var _collectionDetail;

var resetCollections = function (collections) {
  _collections = {};
  collections.forEach(function(collection) {
    _collections[collection.id] = collection;
  });

  CollectionStore.__emitChange();
};

var addCollectionDetail = function (collection) {
  _collectionDetail = collection;
  debugger;
  CollectionStore.__emitChange();
};

CollectionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CollectionConstants.COLLECTIONS_RECEIVED:
      resetCollections(payload.collections);
      break;
    case CollectionConstants.SINGLE_COLLECTION_RECEIVED:
      addCollectionDetail(payload.collection);
      break;
  }
};

module.exports = CollectionStore;
