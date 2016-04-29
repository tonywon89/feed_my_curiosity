var React = require("react");

var SidebarCollectionItemFeed = require("./sidebar_collection_item_feed");

var SidebarCollectionIndexItem = React.createClass({
  getInitialState: function () {
    return { isOpen: false };
  },

  toggleOpen: function () {
    if (this.state.isOpen) {
      this.setState({ isOpen : false });
    } else {
      this.setState({ isOpen : true });
    }
  },

  render: function () {
    var collectionItemIconClass, feeds;
    if (this.state.isOpen) {
      collectionItemIconClass = "fa fa-angle-down collection-index-item-icon";
      feeds = this.props.collection.feeds.map(function (feed) {
        return <SidebarCollectionItemFeed key={feed.id} feed={feed} />;
      });
    } else {
      collectionItemIconClass = "fa fa-angle-right collection-index-item-icon";
    }

    return (
      <div className="collection-index-item">
        <div onClick={this.toggleOpen}>
          <i className={collectionItemIconClass}></i>
          <h4>{this.props.collection.name}</h4>
        </div>
        {feeds}
      </div>
    );
  }
});

module.exports = SidebarCollectionIndexItem;
