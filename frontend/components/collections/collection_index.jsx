var React = require("react");
var hashHistory = require("react-router").hashHistory;

var CollectionStore = require("../../stores/collection_store");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");

var CollectionIndexItem = require("./collection_index_item");
var NewCollectionForm = require("./new_collection_form");

var CollectionIndex = React.createClass({
  getInitialState: function () {
    return { collections: CollectionStore.all() };
  },

  componentDidMount: function () {
    this.listener = CollectionStore.addListener(this._onChange);
    CollectionClientActions.fetchCollections();
  },

  componentWillMount: function () {
    if (!this.props.currentUser) {
      hashHistory.push("/");
    }
  },

  componentWillReceiveProps: function (newProps) {
    if (!newProps.currentUser) {
      hashHistory.push("/");
    }
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({ collections: CollectionStore.all() });
  },

  redirectToHome: function () {
    hashHistory.push("/");
  },

  render: function () {
    var content;
    var currentUser = this.props.currentUser;

    if (currentUser) {
      var collections;
      if (this.state.collections.length > 0) {
        var self = this;
        collections = this.state.collections.map(function(collection) {
          return <CollectionIndexItem key={collection.id}
                                      collection={collection}
                                      displayAddFeed={self.props.displayAddFeed} />;
        });
      }

      content = (
        <div>
          <h1 className="collection-header">Organize</h1>
          <div className="collection-index">
            {collections}
            <NewCollectionForm />
          </div>
        </div>
      );
    }

    return (
      <div>
       {content}
      </div>
    );
  }

});

module.exports = CollectionIndex;
