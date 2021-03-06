var React = require("react");

var CollectionClientActions = require("../../actions/collection/collection_client_actions");
var CollectionStore = require("../../stores/collection_store");

var AddFeedNewCollectionForm = React.createClass({
  getInitialState: function () {
    return { name: "" };
  },

  nameChange: function (event) {
    this.setState({ name: event.target.value });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var collection = {name: this.state.name, feed_id: this.props.feed.id};
    CollectionClientActions.createCollection(collection);
    this.setState({ name: "" });
    this.props.closeForm();
  },

  render: function () {
    return (
      <li className="new-collection-form">
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
