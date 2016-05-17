var React = require("react");
var hashHistory = require("react-router").hashHistory;
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

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
      var description = "You have no collections. Create a new one using the form below or in 'Add Content'.";
      if (this.state.collections.length > 0) {
        var self = this;
        collections = this.state.collections.map(function(collection) {
          return <CollectionIndexItem key={collection.id}
                                      collection={collection}
                                      displayAddFeed={self.props.displayAddFeed} />;
        });
        description = "Drag the feeds in your collections to move them around!";
      }

      content = (
        <div className="collection-index-main">
          <h1 className="collection-header">Organize</h1>
          <p className="collection-description">{description}</p>
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

module.exports = DragDropContext(HTML5Backend)(CollectionIndex);
