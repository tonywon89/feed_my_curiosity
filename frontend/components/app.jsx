var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Modal = require('react-modal');

var Sidebar = require("./sidebars/sidebar");
var LoginForm = require("./user_forms/login_form");
var SignUpForm = require("./user_forms/sign_up_form");
var AddFeedSidebar = require("./sidebars/add_feed_sidebar");

var CurrentUserStateMixn = require("../mixins/current_user_state_mixin");
var UserClientActions = require("../actions/user/user_client_actions");
var FeedClientActions = require("../actions/feed/feed_client_actions");
var FeedStore = require("../stores/feed_store");


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
    top             : '50px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    borderRadius    : '20px',
    padding         : '20px',
    height          : '400px',
    width           : '400px',
    margin          : '0 auto',
    zIndex          :  11
  }
};

var App = React.createClass({
  mixins: [CurrentUserStateMixn],

  getInitialState: function () {
    return {
      feedLoaded: false,
      loginModalOpen: false,
      signupModalOpen: false,
      addFeedDisplayed: false,
      toAddFeedId: undefined
    };
  },

  componentDidMount: function () {

    this.listener = FeedStore.addListener(this._onFeedLoaded);
    FeedClientActions.fetchFeeds();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onFeedLoaded: function () {
    this.setState({ feedLoaded: true });
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

  guestLogin: function () {
    UserClientActions.login({username: "CuriousUser", password: "curious"});
  },

  displayAddFeed: function (feedId) {
    this.setState({ addFeedDisplayed: true, toAddFeedId: feedId });
  },

  closeAddFeed: function () {
    this.setState( { addFeedDisplayed: false, toAddFeedId: undefined });
  },

  render: function () {

    var errors = this.state.authErrors.map(function(error, i){
      return <li key={i}>{error.error_message}</li>;
    });
    var content;
    if (this.state.feedLoaded) {
      content = (
        <div className="app">
          <Sidebar currentUser={this.state.currentUser} openLoginModal={this.openLoginModal}/>

          <div className="main">
            {React.cloneElement(
              this.props.children,
              {
                openLoginModal: this.openLoginModal,
                currentUser: this.state.currentUser,
                logOut: this.logOut,
                displayAddFeed: this.displayAddFeed
              }
            )}
          </div>
          <AddFeedSidebar isDisplayed={this.state.addFeedDisplayed}
                          toAddFeedId={this.state.toAddFeedId}
                          currentUser={this.state.currentUser}
                          closeAddFeed={this.closeAddFeed}/>
        </div>
      );
    } else {
      content = (
        <div className="loading-app">
          <h2>Hold your curiosity while we set up for you to have an awesome experience...</h2>
          <i className="fa fa-spinner fa-spin fa-fw loading-icon"></i>
        </div>
      );
    }
    return (
      <div>
        {content}

        <Modal
          isOpen={this.state.loginModalOpen}
          onRequestClose={this.closeLoginModal}
          style={modalStyle}
        >
          <div className="modal-parent">
            <i className="fa fa-times modal-close-icon" onClick={this.closeLoginModal}></i>
            <h3 className="modal-header">Log In</h3>
            <ul>{errors}</ul>
            <LoginForm />
            <pre className="alternative">
              Don't have an account? <a onClick={this.openSignupModal}>Sign Up Here</a>
              <pre>Or <a onClick={this.guestLogin}>login as a guest</a></pre>
            </pre>

          </div>

        </Modal>

        <Modal
          isOpen={this.state.signupModalOpen}
          onRequestClose={this.closeSignupModal}
          style={modalStyle}
        >

          <div className="modal-parent">
            <i className="fa fa-times modal-close-icon" onClick={this.closeSignupModal}></i>
            <h3 className="modal-header">Sign Up</h3>
            <ul>{errors}</ul>
            <SignUpForm />
            <pre className="alternative">
                Have an account? <a onClick={this.openLoginModal}>Log in</a>
                <pre>Or <a onClick={this.guestLogin}>login as a guest</a></pre>
            </pre>
          </div>

        </Modal>
      </div>
    );
  }
});

module.exports = App;
