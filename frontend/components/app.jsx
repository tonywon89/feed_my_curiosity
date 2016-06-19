var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Modal = require('react-modal');
var classNames = require("classnames");

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Sidebar = require("./sidebars/sidebar");
var LoginForm = require("./user_forms/login_form");
var SignUpForm = require("./user_forms/sign_up_form");
var AddFeedSidebar = require("./sidebars/add_feed_sidebar");
var PopOutDetail = require("./pop_out_details/pop_out_detail");

var CurrentUserStateMixn = require("../mixins/current_user_state_mixin");
var UserClientActions = require("../actions/user/user_client_actions");
var FeedClientActions = require("../actions/feed/feed_client_actions");
var FeedStore = require("../stores/feed_store");

var ModalStyles = require("../mixins/modal_styles");

var modalStyle = ModalStyles.authModalStyle;

var App = React.createClass({
  mixins: [CurrentUserStateMixn],

  getInitialState: function () {
    return {
      feedLoaded: false,
      loginModalOpen: false,
      signupModalOpen: false,
      addFeedDisplayed: false,
      toAddFeedId: undefined,
      popOutDetailDisplayed: false,
      popOutItem: undefined
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

  displayAddFeed: function (feedId) {
    $('body').css("overflow", "hidden");
    this.setState({ addFeedDisplayed: true, toAddFeedId: feedId });
  },

  closeAddFeed: function () {
    $('body').css("overflow", "auto");
    this.setState( { addFeedDisplayed: false, toAddFeedId: undefined });
  },

  displayPopOutDetail: function (item) {
    $('body').css("overflow", "hidden");
    this.setState({ popOutDetailDisplayed: true, popOutItem: item });
  },

  closePopOutDetail: function () {
    this.setState({ popOutDetailDisplayed: false, popOutItem: undefined });
    $('body').css("overflow", "auto");
  },

  render: function () {

    var onSplash = this.props.location.pathname === "/";
    var appClass = classNames({
      'app': true,
      'on-splash': onSplash
    });

    var errors = this.state.authErrors.map(function(error, i){
      return <li key={i}>{error.error_message}</li>;
    });
    var content;
    if (this.state.feedLoaded) {
      content = (
        <div className={appClass}>
          <Sidebar currentUser={this.state.currentUser} openLoginModal={this.openLoginModal}/>

          <div className="main">
            {React.cloneElement(
              this.props.children,
              {
                openLoginModal: this.openLoginModal,
                currentUser: this.state.currentUser,
                logOut: this.logOut,
                displayAddFeed: this.displayAddFeed,
                displayPopOutDetail: this.displayPopOutDetail
              }
            )}
          </div>

          <AddFeedSidebar isDisplayed={this.state.addFeedDisplayed}
                          toAddFeedId={this.state.toAddFeedId}
                          currentUser={this.state.currentUser}
                          closeAddFeed={this.closeAddFeed}/>

          <PopOutDetail isDisplayed={this.state.popOutDetailDisplayed}
                        closePopOutDetail={this.closePopOutDetail}
                        popOutItem={this.state.popOutItem}
                        displayAddFeed={this.displayAddFeed}
                        displayPopOutDetail={this.displayPopOutDetail}/>

        </div>
      );
    } else {
      content = (
        <div className="loading-app">
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <h2 key="1" id="loading-word">Loading curious feeds... </h2>
          <i className="fa fa-spinner fa-spin fa-fw loading-icon"></i>
        </ReactCSSTransitionGroup>

        </div>
      );
    }

    var form, isOpen, requestClose;
    if (this.state.loginModalOpen) {
      form = <LoginForm errors={this.state.authErrors}
                        openSignupModal={this.openSignupModal}/>;
      isOpen = true;
      requestClose = this.closeLoginModal;
    } else if (this.state.signupModalOpen) {
      form = <SignUpForm errors={this.state.authErrors}
                         openLoginModal={this.openLoginModal}/>;
      isOpen = true;
      requestClose = this.closeSignupModal;
    }

    var open = this.state.loginModalOpen || this.state.signupModalOpen;

    return (
      <div>
        {content}

        <Modal
          isOpen={open}
          onRequestClose={requestClose}
          style={modalStyle}
        >
          <div className="modal-parent">
            <i className="fa fa-times modal-close-icon"
               onClick={requestClose} />
            {form}
          </div>
        </Modal>

      </div>
    );
  }
});

module.exports = App;
