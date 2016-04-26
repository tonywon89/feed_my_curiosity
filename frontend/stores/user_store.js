var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");
var UserConstants = require("../constants/user_constants");
var ErrorConstants = require("../constants/error_constants");

var UserStore = new Store(AppDispatcher);

var _currentUser = "unitialized";
var _authErrors = [];

UserStore.currentUser = function () {
  return _currentUser;
};

UserStore.authErrors = function () {
  return _authErrors.slice();
};

var updateCurrentUser = function (user) {
  _currentUser = user;
  UserStore.__emitChange();
};

var updateErrors = function (errors) {
  _authErrors = errors;
  UserStore.__emitChange();
};

UserStore.__onDispatch = function (payload) {
  alert("In UserStore dispatch");
  switch (payload.actionType) {
    case UserConstants.CURRENT_USER_RECEIVED:
      alert("In User store dispatch, current user received");
      updateCurrentUser(payload.currentUser);
      break;
    case UserConstants.LOGGED_OUT_CURRENT_USER:
      alert("In User store dispatch, logged out current user");
      break;
    case ErrorConstants.ERRORS_RECEIVED:
      alert("In User store dispatch, errors received");
      updateErrors(payload.errors);
      break;
  }
};

module.exports = UserStore;
