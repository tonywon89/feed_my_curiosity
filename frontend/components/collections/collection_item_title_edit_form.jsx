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
      <div>
        <h3>Rename Collection</h3>
        <form onSubmit={this.handleEditSubmit}>
          <input type="text" onChange={this.nameChange} value={this.state.name} />
          <input type="submit" value="Rename Collection" />
        </form>
      </div>
    );
  }
});

module.exports = CollectionItemTitleEditForm;
