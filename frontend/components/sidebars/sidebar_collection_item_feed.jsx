var React = require("react");
var hashHistory = require("react-router").hashHistory;

var SidebarCollectionItemFeed = React.createClass({
  redirectToFeedDetail: function () {
    hashHistory.push("/feeds/" + this.props.feed.id.toString());
  },

  render: function () {
    return (
      <div className="feed-item" onClick={this.redirectToFeedDetail}>
        {this.props.feed.name}
      </div>
    );
  }
});

module.exports = SidebarCollectionItemFeed;
