var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");
var UserConstants = require("../constants/user_constants");
var ErrorConstants = require("../constants/error_constants");

var UserStore = new Store(AppDispatcher);

var _currentUser = undefined;
var _authErrors = [];

UserStore.currentUser = function () {
  return _currentUser;
};

UserStore.authErrors = function () {
  return _authErrors.slice();
};

var updateCurrentUser = function (user) {
  _currentUser = user;
  _authErrors = [];
  UserStore.__emitChange();
};

var updateErrors = function (errors) {
  _authErrors = errors;
  UserStore.__emitChange();
};

var logoutUser = function () {
  _currentUser = undefined;
  _authErrors = [];
  UserStore.__emitChange();
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.CURRENT_USER_RECEIVED:
      updateCurrentUser(payload.currentUser);
      break;
    case UserConstants.LOGGED_OUT_CURRENT_USER:
      logoutUser();
      break;
    case ErrorConstants.USER_ERRORS_RECEIVED:
      updateErrors(payload.errors);
      break;
  }
};

module.exports = UserStore;
