var UserApiUtil = require("../../util/user_api_util");

var UserClientActions = {
  fetchCurrentUser: function () {
    UserApiUtil.fetchCurrentUser();
  },

  login: function (user) {
    UserApiUtil.login(user);
  },

  logout: function () {
    UserApiUtil.logout();
  },

  createUser: function (user) {
    alert(" in UserClientActions, create user");
    UserApiUtil.createUser(user);
  }
};

module.exports = UserClientActions;
