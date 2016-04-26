var UserServerActions = require("../actions/user/user_server_actions");

var UserApiUtil = {
  login: function (user) {
    $.ajax({
      type: "POST",
      url: "api/session",
      data: {user : user},
      success: function (currentUser) {
        UserServerActions.receiveCurrentUser(currentUser);
      },
      error: function (errors) {
        alert("Login Fail");
      }
    });
  }
};

module.exports = UserApiUtil;
