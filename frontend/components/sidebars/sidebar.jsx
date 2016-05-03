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

  stopBodyScroll: function (event) {
    $('body').css("overflow", "hidden");
  },

  enableBodyScroll: function (event) {
    $('body').css("overflow", "auto");
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
    var sidebarContent;
    if (this.props.currentUser) {
      sidebarContent =(
        <div>
          <button className="pin-btn" onClick={this.pinClicked}>
            {pinBtnContent}
          </button>

          <div className="sidebar-content">
            <button className="sidebar-add-content" onClick={this.handleAddContentClick}>
              Add Content
            </button>

            <SidebarCollectionIndex currentUser={this.props.currentUser}/>
          </div>

          <SidebarUserInfo />
        </div>
      );
    } else {
      sidebarContent = (
        <div className="sidebar-content">
          <h2>Welcome to <div>Feed My Curiosity</div> </h2>
          <h3>Get your curiosity satisfied</h3>

          <button className="getting-started" onClick={this.props.openLoginModal}>Get Started</button>
        </div>
      );
    }

    return (
      <div className={sidebarClass} onMouseEnter={this.stopBodyScroll}
                                    onMouseLeave={this.enableBodyScroll}>
        <i className="fa fa-bars"></i>
        {sidebarContent}
      </div>
    );
  }
});

module.exports = Sidebar;
