var React = require('react');
var Modal = require('react-modal');
var LoginForm = require("./user_forms/login_form");
var SignUpForm = require("./user_forms/sign_up_form");
var CurrentUserStateMixn = require("../mixins/current_user_state_mixin");
var UserClientActions = require("../actions/user/user_client_actions");
var style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.75)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    top             : '100px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    borderRadius    : '20px',
    padding         : '20px',
    height          : '75%',
    width           : '450px',
    margin          : '0 auto',
    zIndex          :  11
  }
};

var App = React.createClass({
  mixins: [CurrentUserStateMixn],

  getInitialState: function () {
    return { loginModalOpen: false, signupModalOpen: false };
  },

  openLoginModal: function (event) {
    event.preventDefault();
    this.setState({ loginModalOpen: true, signupModalOpen: false, authErrors: [] });
  },

  closeLoginModal: function (event) {
    event.preventDefault();
    this.setState({ loginModalOpen: false, authErrors: [] });
  },

  openSignupModal: function (event) {
    event.preventDefault();
    this.setState({ signupModalOpen: true, loginModalOpen: false, authErrors: [] });
  },

  closeSignupModal: function (event) {
    event.preventDefault();
    this.setState({ signupModalOpen: false, authErrors: [] });
  },

  logOut: function (event) {
    event.preventDefault();
    UserClientActions.logout();
  },

  render: function () {
    var content;
    var currentUser = this.state.currentUser;

    if (currentUser) {
      content = (
        <div>
          You are logged in as {currentUser.email}
          <button onClick={this.logOut}>Log out</button>
        </div>
      );
    } else {
      content = <button onClick={this.openLoginModal}>Get Started</button>;
    }

    var errors = this.state.authErrors.map(function(error){
      return <li>{error.error_message}</li>;
    });

    return (
      <div>
        <h1>Feed My Curiosity</h1>
        {this.props.children}

        {content}

        <Modal
          isOpen={this.state.loginModalOpen}
          style={style}
        >
          <ul>{errors}</ul>
          <LoginForm />
          <a onClick={this.openSignupModal}>Sign Up Instead</a>
          <button onClick={this.closeLoginModal}>Close</button>

        </Modal>

        <Modal
          isOpen={this.state.signupModalOpen}
          style={style}
        >
          <ul>{errors}</ul>
          <SignUpForm />
          <a onClick={this.openLoginModal}>Have an account? Click here to log in</a>
          <button onClick={this.closeSignupModal}>Close</button>

        </Modal>
      </div>
    );
  }
});

module.exports = App;
