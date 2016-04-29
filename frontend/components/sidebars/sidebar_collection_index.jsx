var React = require("react");

var CollectionStore = require("../../stores/collection_store");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");

var SidebarCollectionIndexItem = require("./sidebar_collection_index_item");

var SidebarCollectionIndex = React.createClass({
  getInitialState: function () {
    return { collections: CollectionStore.all() };
  },

  componentDidMount: function () {
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
    var collections = this.state.collections.map(function(collection) {
      return <SidebarCollectionIndexItem key={collection.id} collection={collection} />;
    });

    return (
      <div className="collection-index">
        {collections}
      </div>
    );
  }
});

module.exports = SidebarCollectionIndex;
