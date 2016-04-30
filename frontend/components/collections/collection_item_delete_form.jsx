var React = require("react");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");

var CollectionItemDeleteForm = React.createClass({
  deleteCollection: function (event) {
    event.preventDefault();
    CollectionClientActions.destroyCollection(this.props.collection);
  },

  render: function () {
    return (
      <div className="collection-delete-form">
        <h1>Confirm Deletion</h1>
        <h3>Are you sure you want to delete "<span>{this.props.collection.name}</span>"?</h3>
        <div className="delete-btns">  
          <button className="confirm-delete-btn" onClick={this.deleteCollection}>Yes</button>
          <button className="cancel-delete-btn">No</button>
        </div>
      </div>
    );
  }
});

module.exports = CollectionItemDeleteForm;
