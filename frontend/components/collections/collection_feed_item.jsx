var React = require("react");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");
var PropTypes = React.PropTypes;
var ItemTypes = require('../../draggable/Constants').ItemTypes;
var DragSource = require('react-dnd').DragSource;

var feedSource = {
  beginDrag: function (props) {
    return { feed: props.feed, collection: props.collection };
  },

  endDrag: function (props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    var item = monitor.getItem();
    if (monitor.getDropResult().id) {
      var collection = item.collection;
      collection.add = "";
      collection.remove = item.feed;
      CollectionClientActions.updateCollection(collection);
    }
  }
};

var collect = function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

var CollectionFeedItem = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  removeFeed: function () {
    var collection = this.props.collection;
    collection.add = "";
    collection.remove = this.props.feed;
    CollectionClientActions.updateCollection(collection);
  },

  displayAddFeed: function () {
    this.props.displayAddFeed(this.props.feed.id);
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    return connectDragSource(
      <div className="collection-feed-item"
          style={{
          opacity: isDragging ? 0.5 : 1,
          fontWeight: 'bold',
          cursor: 'move'}}>
        {this.props.feed.name}
        <div className="edit-icons">
          <i className="fa fa-pencil pencil" onClick={this.displayAddFeed}></i>
          <i className="fa fa-times times" onClick={this.removeFeed}></i>
        </div>
      </div>
    );
  }
});

module.exports = DragSource(ItemTypes.FEED, feedSource, collect)(CollectionFeedItem);
