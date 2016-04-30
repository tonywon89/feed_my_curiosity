var React = require("react");
var hashHistory = require("react-router").hashHistory;

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

  redirectToCollectionDetail: function () {
    hashHistory.push("/collections/" + this.props.collection.id.toString());
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
        <div>
          <i className={collectionItemIconClass}
             onClick={this.toggleOpen}>
          </i>
          <h4 onClick={this.redirectToCollectionDetail}>
            {this.props.collection.name}
          </h4>
        </div>
        {feeds}
      </div>
    );
  }
});

module.exports = SidebarCollectionIndexItem;
