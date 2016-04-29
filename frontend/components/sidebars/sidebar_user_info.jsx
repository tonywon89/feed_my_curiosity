var React = require("react");

var CurrentUserStateMixn = require("../../mixins/current_user_state_mixin");
var UserClientActions = require("../../actions/user/user_client_actions");

var SidebarUserInfo = React.createClass({
  mixins: [CurrentUserStateMixn],

  logout: function (event) {
    event.preventDefault();
    UserClientActions.logout(this.state.currentUser);
  },

  render: function () {
    var currentUser = this.state.currentUser;
    var content;
    //TODO REFACTOR THIS LATER
    if (currentUser) {
      content = (
        <div>
          <pre>Curiously Logged In As:
            <h4>{currentUser.email}</h4>
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
