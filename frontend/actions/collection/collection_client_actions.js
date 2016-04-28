var CollectionApiUtil = require("../../util/collection_api_util");

var CollectionClientActions = {
  fetchCollections: function () {
    CollectionApiUtil.fetchCollections();
  },

  getCollection: function (id) {
    CollectionApiUtil.getCollection(id);
  },

  createCollection: function(collection) {
    CollectionApiUtil.createCollection(collection);
  }
};

module.exports = CollectionClientActions;
