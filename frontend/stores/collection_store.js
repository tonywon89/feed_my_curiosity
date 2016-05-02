var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");
var CollectionConstants = require("../constants/collection_constants");
var ErrorConstants = require("../constants/error_constants");

var CollectionStore = new Store(AppDispatcher);

var _collections = {};
var _collectionErrors = [];
var _collectionDetail;

var resetCollections = function (collections) {
  _collections = {};
  collections.forEach(function(collection) {
    _collections[collection.id] = collection;
  });
  _collectionErrors = [];
  CollectionStore.__emitChange();
};

var addCollection = function (collection) {
  _collections[collection.id] = collection;
  _collectionErrors = [];
  CollectionStore.__emitChange();
};

var removeCollection = function (collection) {
  delete _collections[collection.id];
  _collectionErrors = [];
  CollectionStore.__emitChange();
};

var addCollectionDetail = function (collection) {
  _collectionDetail = collection;
  _collectionErrors = [];
  CollectionStore.__emitChange();
};

var updateErrors = function (errors) {
  _collectionErrors = errors;
  CollectionStore.__emitChange();
};

CollectionStore.all = function () {
  return Object.keys(_collections).map(function(id) {
    return _collections[id];
  });
};

CollectionStore.mostRecent = function () {
  var keys = Object.keys(_collections);
  return _collections[keys[keys.length - 1]];
};

CollectionStore.find = function (id) {
  return _collections[id];
};

CollectionStore.errors = function () {
  return _collectionErrors.slice();
};

CollectionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CollectionConstants.COLLECTIONS_RECEIVED:
      resetCollections(payload.collections);
      break;
    case CollectionConstants.SINGLE_COLLECTION_RECEIVED:
      addCollectionDetail(payload.collection);
      break;
    case CollectionConstants.COLLECTION_CREATED:
      addCollection(payload.collection);
      break;
    case CollectionConstants.COLLECTION_UPDATED:
      addCollection(payload.collection);
      break;
    case CollectionConstants.COLLECTION_DELETED:
      removeCollection(payload.collection);
      break;
    case ErrorConstants.COLLECTION_ERRORS_RECEIVED:
      updateErrors(payload.errors);
      break;
  }
};

module.exports = CollectionStore;
