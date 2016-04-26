

var UserApiUtil = {
  login: function (user) {
    $.ajax({
      type: "POST",
      url: "api/session",
      data: {user : user},
      success: function (currentUser) {
        alert("Login Success");
      },
      error: function (errors) {
        alert("Login Fail");
      }
    });
  }
};

module.exports = UserApiUtil;
