var React = require("react");
var hashHistory = require("react-router").hashHistory;

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

    return (
      <div className={sidebarClass}>
        <i className="fa fa-bars"></i>
        <button className="pin-btn" onClick={this.pinClicked}>
          {pinBtnContent}
        </button>
        <div className="sidebar-content">
          <div className="sidebar-today">
            <i className="fa fa-rss sidebar-icon"></i>
            <div>Today</div>
          </div>

          <div className="sidebar-save">
            <i className="fa fa-bookmark-o sidebar-icon"></i>
            <div>Save for later</div>
          </div>

          <button className="sidebar-add-content" onClick={this.handleAddContentClick}>
            Add Content
          </button>
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;
