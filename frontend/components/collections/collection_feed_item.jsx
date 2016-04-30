var React = require("react");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");

var CollectionFeedItem = React.createClass({
  removeFeed: function () {
    var collection = this.props.collection;
    collection.add = "";
    collection.remove = this.props.feed;
    CollectionClientActions.updateCollection(collection);
  },

  render: function () {
    return (
      <div className="collection-feed-item">
        {this.props.feed.name}
        <div className="edit-icons">
          <i className="fa fa-pencil pencil"></i>
          <i className="fa fa-times times" onClick={this.removeFeed}></i>
        </div>
      </div>
    );
  }
});

module.exports = CollectionFeedItem;
