var React = require("react");

var CollectionStore = require("../../stores/collection_store");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");

var CollectionIndex = React.createClass({
  getInitialState: function () {
    return { collections: CollectionStore.all() };
  },

  componentWillMount: function () {
    this.listener = CollectionStore.addListener(this._onChange);
    CollectionClientActions.fetchCollections();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({ collections: CollectionStore.all() });
  },

  render: function () {
    return (
      <div>
        The is the collection Index
      </div>
    );
  }

});

module.exports = CollectionIndex;
