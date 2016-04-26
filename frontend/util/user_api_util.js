var UserServerActions = require("../actions/user/user_server_actions");
var ErrorServerActions = require("../actions/error/error_server_actions");

var UserApiUtil = {
  fetchCurrentUser: function () {
    $.ajax({
      type: "GET",
      url: "api/user",
      success: function (currentUser) {
        UserServerActions.receiveCurrentUser(currentUser);
      },
      error: function (errors) {
        ErrorServerActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  login: function (user) {
    $.ajax({
      type: "POST",
      url: "api/session",
      data: { user : user },
      dataType: "json",
      success: function (currentUser) {
        UserServerActions.receiveCurrentUser(currentUser);
      },
      error: function (errors) {
        ErrorServerActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  logout: function () {
    $.ajax({
      type: "DELETE",
      url: "api/session",
      success: function () {
        UserServerActions.logoutCurrentUser();
      },
      error: function (errors) {
        ErrorServerActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  createUser: function (user) {
    $.ajax({
      type: "POST",
      url: "api/user",
      data: {user: user},
      success: function (currentUser) {
        UserServerActions.receiveCurrentUser(currentUser);
      },
      error: function (errors) {
        ErrorServerActions.receiveErrors(errors.responseJSON);
      }
    });
  }
};

module.exports = UserApiUtil;
