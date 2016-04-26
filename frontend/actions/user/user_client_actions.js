var UserApiUtil = require("../../util/user_api_util");

var UserClientActions = {
  login: function (user) {
    UserApiUtil.login(user);
  }
};

module.exports = UserClientActions;
