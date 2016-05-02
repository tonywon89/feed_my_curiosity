var React = require("react");
var Link = require("react-router").Link;
var hashHistory = require("react-router").hashHistory;

var CollectionStore = require("../../stores/collection_store");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");
var UserStore = require("../../stores/user_store");
var SidebarCollectionIndexItem = require("./sidebar_collection_index_item");

var SidebarCollectionIndex = React.createClass({
  getInitialState: function () {
    return { collections: CollectionStore.all() };
  },

  componentDidMount: function () {
    this.collectionListener = CollectionStore.addListener(this._onCollectionChange);
    this.userListener = UserStore.addListener(this._onUserChange);
    CollectionClientActions.fetchCollections();
  },

  componentWillUnmount: function () {
    this.userListener.remove();
    this.collectionListener.remove();
  },

  _onUserChange: function () {
    CollectionClientActions.fetchCollections();
  },

  _onCollectionChange: function () {
    this.setState({ collections: CollectionStore.all() });
  },

  _toOrganize: function () {
    hashHistory.push("/collections");
  },

  render: function () {
    var collections = this.state.collections.map(function(collection) {
      return <SidebarCollectionIndexItem key={collection.id} collection={collection} />;
    });
    var organize = (
      <div className="sidebar-organize-btn" onClick={this._toOrganize}>
        <Link to="/collections">Organize</Link>
      </div>
    );
    return (
      <div className="sidebar-collection-index">
        {collections}
        {organize}
      </div>
    );
  }
});

module.exports = SidebarCollectionIndex;
