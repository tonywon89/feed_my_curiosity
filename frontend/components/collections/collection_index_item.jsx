var React = require("react");
var Modal = require("react-modal");

var CollectionIndexItemTitle = require("./collection_index_item_title");
var CollectionItemTitleEditForm = require("./collection_item_title_edit_form");
var CollectionItemDeleteForm = require("./collection_item_delete_form");
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

var CollectionIndexItem = React.createClass({
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
    return (
      <div className="collection-index-item">
        <CollectionIndexItemTitle
          title={this.props.collection.name}
          openEditModal={this.openEditModal}
          openDeleteModal={this.openDeleteModal} />

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
          <CollectionItemDeleteForm collection={this.props.collection} />
        </Modal>


      </div>
    );
  }
});

module.exports = CollectionIndexItem;
