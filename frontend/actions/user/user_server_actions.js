var AppDispatcher = require("../../dispatcher/dispatcher");
var UserConstants = require("../../constants/user_constants");

var UserServerActions = {
  receiveCurrentUser: function (currentUser) {
    alert("In User Server Actions, receiveCurrentUser");
    AppDispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  },

  logoutCurrentUser: function () {
    alert("In User Server Actions, logoutCurrentUser");
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGGED_OUT_CURRENT_USER
    });
  }
};

module.exports = UserServerActions;
