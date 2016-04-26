var UserStore = require("../stores/user_store");
var UserClientActions = require("../actions/user/user_client_actions");

var CurrentUserStateMixin = {
  getInitialState: function () {
    return {
      currentUser: UserStore.currentUser(),
      authErrors: UserStore.authErrors()
    };
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this._onChange);

    if (this.state.currentUser === "unitialized" ||
        this.state.currentUser === "none") {
      UserClientActions.fetchCurrentUser();
    }
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  updateUser: function () {
    this.setState({
      currentUser: UserStore.currentUser(),
      authErrors: UserStore.authErrors()
    });
  }

};

module.exports = CurrentUserStateMixin;
