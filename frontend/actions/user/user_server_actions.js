var AppDispatcher = require("../../dispatcher/dispatcher");
var UserConstants = require("../../constants/user_constants");

var UserServerActions = {
  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  },

  logoutCurrentUser: function () {
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGGED_OUT_CURRENT_USER
    });
  }
};

module.exports = UserServerActions;
