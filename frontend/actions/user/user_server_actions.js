var AppDispatcher = require("../../dispatcher/dispatcher");
var UserConstants = require("../../constants/user_constants");

var UserServerActions = {
  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVED_CURRENT_USER,
      currentUser: currentUser
    });
  }
};

module.exports = UserServerActions;
