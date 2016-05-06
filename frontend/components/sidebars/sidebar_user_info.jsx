var React = require("react");

var CurrentUserStateMixn = require("../../mixins/current_user_state_mixin");
var UserClientActions = require("../../actions/user/user_client_actions");
var ArticleStore = require("../../stores/article_store");

var SidebarUserInfo = React.createClass({
  mixins: [CurrentUserStateMixn],

  logout: function (event) {
    event.preventDefault();
    ArticleStore.hardResetArticles();
    this.props.unPin();
    UserClientActions.logout(this.state.currentUser);

  },

  render: function () {
    var currentUser = this.state.currentUser;
    var content;

    if (currentUser) {
      content = (
        <div>
          <pre>Curiously Logged In As:
            <h4>{currentUser.username}</h4>
          </pre>
          <button onClick={this.logout}>Logout</button>
        </div>
      );
    }

    return (
      <div className="sidebar-user-info">
        {content}
      </div>
    );
  }
});

module.exports = SidebarUserInfo;
