var React = require("react");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");

var CollectionItemDeleteForm = React.createClass({
  render: function () {
    return (
      <div className="collection-delete-form">
        <h1>Confirm Deletion</h1>
        <h3>Are you sure you want to delete "<span>{this.props.collection.name}</span>"?</h3>
        <button className="confirm-delete-btn">Yes</button>
        <button className="cancel-delete-btn">No</button>
      </div>
    );
  }
});

module.exports = CollectionItemDeleteForm;
