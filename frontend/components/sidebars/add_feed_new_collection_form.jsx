var React = require("react");

var CollectionClientActions = require("../../actions/collection/collection_client_actions");

var AddFeedNewCollectionForm = React.createClass({
  getInitialState: function () {
    return { name: "" };
  },

  nameChange: function (event) {
    this.setState({ name: event.target.value });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var collection = {name: this.state.name };
    CollectionClientActions.createCollection(collection);
    this.setState({ name: "" });
  },

  render: function () {
    return (
      <li className="add-feed-collection new-collection-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 placeholder="Name of collection"
                 value={this.state.name}
                 onChange={this.nameChange}/>
          <input type="submit" value="Create" />
        </form>
      </li>
    );
  }
});

module.exports = AddFeedNewCollectionForm;
