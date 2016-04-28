var AppDispatcher = require("../../dispatcher/dispatcher");
var ErrorConstants = require("../../constants/error_constants");

var ErrorServerActions = {
  receiveUserErrors: function (errors) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.USER_ERRORS_RECEIVED,
      errors: errors
    });
  },

  receiveCollectionErrors: function (errors) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.COLLECTION_ERRORS_RECEIVED,
      errors: errors
    });
  }
};

module.exports = ErrorServerActions;
