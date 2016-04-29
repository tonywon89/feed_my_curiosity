var React = require("react");

var SidebarCollectionItemFeed = React.createClass({
  render: function () {
    return (
      <div className="feed-item">
        {this.props.feed.name}
      </div>
    );
  }
});

module.exports = SidebarCollectionItemFeed;
