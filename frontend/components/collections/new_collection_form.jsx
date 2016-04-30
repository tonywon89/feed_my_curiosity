var React = require("react");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");
var CollectionStore = require("../../stores/collection_store");

var NewCollectionForm = React.createClass({
  getInitialState: function () {
    return { name: "", errors: [] };
  },

  componentDidMount: function () {
    this.listener = CollectionStore.addListener(this._onErrors);
  },

  componentWillUnmmount: function () {
    this.listener.remove();
  },

  _onErrors: function () {
    if (CollectionStore.errors().length > 0) {
      this.setState({ errors: CollectionStore.errors() });
    }
  },

  nameChange: function (event) {
    this.setState({ name: event.target.value });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var collection = { name: this.state.name };
    CollectionClientActions.createCollection(collection);
    this.setState({ name: "" });
  },

  render: function () {
    var errors = this.state.errors.map(function (error, i) {
      return <li key={i}>{error.error_message}</li>;
    });

    return (
      <div className="collection-index-item collection-create-form">
        <h4>New Collection</h4>
        <ul>{errors}</ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 placeholder="Name of collection"
                 onChange={this.nameChange}
                 value={this.state.name}/>
          <input  className="create-collection-btn" type="submit" value="Create Collection" />
        </form>
      </div>
    );
  }
});

module.exports = NewCollectionForm;
