var UserServerActions = require("../actions/user/user_server_actions");
var ErrorServerActions = require("../actions/error/error_server_actions");

var UserApiUtil = {
  login: function (user) {
    $.ajax({
      type: "POST",
      url: "api/session",
      data: {user : user},
      dataType: "json",
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
