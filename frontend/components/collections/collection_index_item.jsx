var React = require("react");
var Modal = require("react-modal");
var PropTypes = React.PropTypes;
var ItemTypes = require('../../draggable/Constants').ItemTypes;
var DropTarget = require('react-dnd').DropTarget;

var CollectionIndexItemTitle = require("./collection_index_item_title");
var CollectionFeedItem = require("./collection_feed_item");
var CollectionItemTitleEditForm = require("./collection_item_title_edit_form");
var CollectionItemDeleteForm = require("./collection_item_delete_form");

var CollectionClientActions = require("../../actions/collection/collection_client_actions");

var modalStyle = {
  overlay: {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(100, 123, 124, 0.5)',
    zIndex          : 10
  },
  content: {
    position        : 'fixed',
    top             : '200px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    padding         : '20px',
    height          : '200px',
    width           : '550px',
    margin          : '0 auto',
    zIndex          :  11
  }
};

var indexItemTarget = {
  drop: function (props, monitor) {
    var item = monitor.getItem();
    var feed = item.feed;
    if (item.collection.id !== props.collection.id) {
      var collection = props.collection;
      collection.add = feed;
      collection.remove = "";
      CollectionClientActions.updateCollection(collection);
      return collection;
    } else {
      return undefined;
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

var CollectionIndexItem = React.createClass({
  propTypes: {
    collection: PropTypes.object.isRequired,
    isOver: PropTypes.bool.isRequired
  },

  getInitialState: function () {
    return { editModalOpen: false, deleteModalOpen: false };
  },

  componentWillReceiveProps: function () {
    this.setState( { editModalOpen: false , deleteModalOpen: false});
  },

  closeEditModal: function () {
    this.setState({ editModalOpen: false });
  },

  openEditModal: function () {
    this.setState({ editModalOpen: true });
  },

  closeDeleteModal: function () {
    this.setState({ deleteModalOpen: false });
  },

  openDeleteModal: function () {
    this.setState({ deleteModalOpen: true });
  },

  render: function () {
    var collection = this.props.collection;
    var connectDropTarget = this.props.connectDropTarget;
    var isOver = this.props.isOver;

    var self = this;
    var feeds = this.props.collection.feeds.map(function (feed) {
      return <CollectionFeedItem
                  key={feed.id}
                  feed={feed}
                  collection={self.props.collection}
                  displayAddFeed={self.props.displayAddFeed} />;
    });

    return connectDropTarget(
      <div className="collection-index-item">
        <CollectionIndexItemTitle
          collection={this.props.collection}
          openEditModal={this.openEditModal}
          openDeleteModal={this.openDeleteModal} />

        <div className="collection-item-feeds">
          {feeds}
        </div>

        <Modal
          isOpen={this.state.editModalOpen}
          onRequestClose={this.closeEditModal}
          style={modalStyle}
        >
          <i className="fa fa-times modal-close-icon" onClick={this.closeEditModal}></i>
          <CollectionItemTitleEditForm
              collection={this.props.collection}
              closeModal={this.closeEditModal} />
        </Modal>

        <Modal
          isOpen={this.state.deleteModalOpen}
          onRequestClose={this.closeDeleteModal}
          style={modalStyle}
        >
          <i className="fa fa-times modal-close-icon" onClick={this.closeDeleteModal}></i>
          <CollectionItemDeleteForm
              collection={this.props.collection}
              closeModal={this.closeDeleteModal} />
        </Modal>


      </div>
    );
  }
});

module.exports = DropTarget(ItemTypes.FEED, indexItemTarget, collect)(CollectionIndexItem);
