var React = require("react");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");


var NewCollectionForm = React.createClass({
  getInitialState: function () {
    return { name: "" };
  },

  nameChange: function (event) {
    this.setState({ name: event.target.value });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var collection = { name: this.state.name };
    CollectionClientActions.createCollection(collection);
  },

  render: function () {
    return (
      <div className="collection-index-item">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 placeholder="Name of collection"
                 onChange={this.nameChange}
                 value={this.state.name}/>
          <input type="submit" value="Create Collection" />
        </form>
      </div>
    );
  }
});

module.exports = NewCollectionForm;
