var CollectionApiUtil = require("../../util/collection_api_util");

var CollectionClientActions = {
  fetchCollections: function () {
    CollectionApiUtil.fetchCollections();
  }
};

module.exports = CollectionClientActions;
