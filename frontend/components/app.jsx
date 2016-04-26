var React = require('react');
var Modal = require('react-modal');
var LoginForm = require("./user_forms/login_form");
var SignUpForm = require("./user_forms/sign_up_form");


var App = React.createClass({
  getInitialState: function () {
    return { loginModalOpen: false, signupModalOpen: false };
  },

  openLoginModal: function (event) {
    event.preventDefault();
    this.setState({ loginModalOpen: true, signupModalOpen: false });
  },

  closeLoginModal: function (event) {
    event.preventDefault();
    this.setState({ loginModalOpen: false });
  },

  openSignupModal: function (event) {
    event.preventDefault();
    this.setState({ signupModalOpen: true, loginModalOpen: false });
  },

  closeSignupModal: function (event) {
    event.preventDefault();
    this.setState({ signupModalOpen: false });
  },

  render: function () {
    return (
      <div>
        <h1>Feed My Curiosity</h1>
        {this.props.children}

        <button onClick={this.openLoginModal}>Get Started</button>

        <Modal
          isOpen={this.state.loginModalOpen}>

          <LoginForm />
          <a onClick={this.openSignupModal}>Sign Up Instead</a>
          <button onClick={this.closeLoginModal}>Close</button>

        </Modal>

        <Modal
          isOpen={this.state.signupModalOpen} >

          <SignUpForm />
          <a onClick={this.openLoginModal}>Have an account? Click here to log in</a>
          <button onClick={this.closeSignupModal}>Close</button>

        </Modal>
      </div>
    );
  }
});

module.exports = App;
