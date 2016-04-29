var React = require("react");
var hashHistory = require("react-router").hashHistory;

var SidebarCollectionIndex = require("./sidebar_collection_index");
var SidebarUserInfo = require("./sidebar_user_info");

var Sidebar = React.createClass({
  getInitialState: function () {
    return { pinned: false};
  },

  pinClicked: function (event) {
    event.preventDefault();

    if (this.state.pinned) {
      this.setState({ pinned: false });
    } else {
      this.setState({ pinned: true });
    }
  },

  handleAddContentClick: function (event) {
    event.preventDefault();
    hashHistory.push("/feeds");
  },

  render: function () {
    var pinBtnContent;
    var sidebarClass = "sidebar";

    if (this.state.pinned){
      pinBtnContent = "Unpin";
      sidebarClass = "sidebar pinned";
    } else {
      pinBtnContent = "Pin";
    }
    //TODO refactor out current user
    return (
      <div className={sidebarClass}>
        <i className="fa fa-bars"></i>

        <button className="pin-btn" onClick={this.pinClicked}>
          {pinBtnContent}
        </button>

        <div className="sidebar-content">
          <div className="sidebar-today">
            <i className="fa fa-rss sidebar-icon"></i>
            <div>Today (Not Implemented)</div>
          </div>

          <div className="sidebar-save">
            <i className="fa fa-bookmark-o sidebar-icon"></i>
            <div>Save for later (Not Implemented)</div>
          </div>

          <button className="sidebar-add-content" onClick={this.handleAddContentClick}>
            Add Content
          </button>

          <SidebarCollectionIndex currentUser={this.props.currentUser}/>
        </div>

        <SidebarUserInfo />
      </div>
    );
  }
});

module.exports = Sidebar;
