var React = require('react');
var Modal = require('react-modal');
var LoginForm = require("./user_forms/login_form");
var SignUpForm = require("./user_forms/sign_up_form");
var CurrentUserStateMixn = require("../mixins/current_user_state_mixin");
var UserClientActions = require("../actions/user/user_client_actions");
// This is something to test bundle.js

var modalStyle = {
  overlay: {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(100, 123, 124, 0.5)',
    zIndex          : 10
  },
  content: {
    position        : 'fixed',
    top             : '100px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    borderRadius    : '20px',
    padding         : '20px',
    height          : '50%',
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
      content = <button className="getting-started" onClick={this.openLoginModal}>Get Started</button>;
    }

    var errors = this.state.authErrors.map(function(error, i){
      return <li key={i}>{error.error_message}</li>;
    });

    return (
      <div>
        <header>
          <h1 className="header-text">Feed My Curiosity</h1>
          {content}
        </header>

        <Modal
          isOpen={this.state.loginModalOpen}
          style={modalStyle}
        >
          <div className="modal-parent">
            <i className="fa fa-times modal-close-icon" onClick={this.closeLoginModal}></i>
            <h3 className="modal-header">Log In</h3>
            <ul>{errors}</ul>
            <LoginForm />
            <pre className="alternative">
              Don't have an account? <a onClick={this.openSignupModal}>Sign Up Here</a>
            </pre>
          </div>

        </Modal>

        <Modal
          isOpen={this.state.signupModalOpen}
          style={modalStyle}
        >

          <div className="modal-parent">
            <i className="fa fa-times modal-close-icon" onClick={this.closeSignupModal}></i>
            <h3 className="modal-header">Sign Up</h3>
            <ul>{errors}</ul>
            <SignUpForm />
            <pre className="alternative">
                Have an account? <a onClick={this.openLoginModal}>Log in</a>
            </pre>
          </div>

        </Modal>
      </div>
    );
  }
});

module.exports = App;
