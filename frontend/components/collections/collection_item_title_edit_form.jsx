var React = require("react");
var hashHistory = require("react-router").hashHistory;

var CollectionClientActions = require("../../actions/collection/collection_client_actions");

var CollectionItemTitleEditForm = React.createClass({
  getInitialState: function () {
    return { name: this.props.collection.name };
  },

  nameChange: function (event) {
    this.setState({ name: event.target.value });
  },

  handleEditSubmit: function (event) {
    event.preventDefault();
    var collection = this.props.collection;
    collection.name = this.state.name;
    collection.add = "";
    collection.remove = "";

    CollectionClientActions.updateCollection(collection);
  },

  render: function () {
    return (
      <div className="collection-title-edit-form">
        <h3>Rename Collection</h3>
        <h4>What do you want to call your collection?</h4>
        <form onSubmit={this.handleEditSubmit}>
          <input type="text" onChange={this.nameChange}
                 value={this.state.name} placeholder="Name of Collection" />
          <input type="submit" value="Rename Collection" />
          <span> or <a onClick={this.props.closeModal}>cancel</a> </span>
        </form>

      </div>
    );
  }
});

module.exports = CollectionItemTitleEditForm;
