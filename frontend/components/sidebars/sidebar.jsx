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

  unPin: function () {

    if (this.state.pinned) {
      this.setState({ pinned : false });
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

  _toSavedArticles: function () {
    hashHistory.push("/saved_articles");
  },

  _toOrganize: function () {
    hashHistory.push("/collections");
  },


  render: function () {
    var pinBtnContent;
    var sidebarClass = "sidebar";

    if (this.state.pinned){
      pinBtnContent = "Don't Keep Open";
      sidebarClass = "sidebar pinned";
    } else {
      pinBtnContent = "Keep Open";
    }
    var sidebarContent;
    if (this.props.currentUser) {
      sidebarContent =(
        <div>
          <button className="pin-btn" onClick={this.pinClicked}>
            {pinBtnContent}
          </button>

          <div className="sidebar-content">
            <div className="sidebar-save" onClick={this._toSavedArticles}>
              <i className="fa fa-bookmark-o sidebar-icon"></i>
              <div>Saved for later</div>
            </div>

            <button className="sidebar-add-content" onClick={this.handleAddContentClick}>
              Add Content
            </button>
            
            <button className="sidebar-add-content" onClick={this._toOrganize}>
              Organize
            </button>

            <SidebarCollectionIndex currentUser={this.props.currentUser}/>
          </div>

          <SidebarUserInfo unPin={this.unPin}/>
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
