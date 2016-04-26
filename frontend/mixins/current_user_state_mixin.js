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
    UserClientActions.fetchCurrentUser();
  },

  _onChange: function () {
    var authErrors = UserStore.authErrors();

    var loginModalOpen;
    var signupModalOpen;
    
    if (authErrors.length !== 0 && this.state.loginModalOpen){
      loginModalOpen = true;
      signupModalOpen = false;
    } else if (authErrors.length !== 0 && this.state.signupModalOpen) {
      loginModalOpen = false;
      signupModalOpen = true;
    } else {
      loginModalOpen = false;
      signupModalOpen = false;
    }

    this.setState({
      currentUser: UserStore.currentUser(),
      authErrors: authErrors,
      loginModalOpen: loginModalOpen,
      signupModalOpen: signupModalOpen
    });
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
