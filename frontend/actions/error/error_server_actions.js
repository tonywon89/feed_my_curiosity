var AppDispatcher = require("../../dispatcher/dispatcher");
var ErrorConstants = require("../../constants/error_constants");

var ErrorServerActions = {
  receiveErrors: function (errors) {
    alert("In ErrorServerActions receiveErrors");
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERRORS_RECEIVED,
      errors: errors
    });
  }
};

module.exports = ErrorServerActions;
