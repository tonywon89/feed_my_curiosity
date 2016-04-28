var React = require("react");

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
        <div class="sidebar-today">
          <i className="fa fa-question-circle-o"></i>
          <div>Today</div>
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;
