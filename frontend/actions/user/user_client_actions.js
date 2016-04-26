var UserApiUtil = require("../../util/user_api_util");

var UserClientActions = {
  fetchCurrentUser: function () {

  },
  
  login: function (user) {
    UserApiUtil.login(user);
  }
};

module.exports = UserClientActions;
