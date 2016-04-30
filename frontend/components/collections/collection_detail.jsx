var React = require("react");
var hashHistory = require("react-router").hashHistory;

var CollectionStore = require("../../stores/collection_store");

var CollectionDetail = React.createClass({
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

  render: function () {
    var collection = CollectionStore.find(this.props.params.collectionId);

    var collectionName;
    if (collection) {
      collectionName = <h1>{collection.name}</h1>;
    }

    return (
      <div className="collection-detail">
        {collectionName}
      </div>
    );
  }
});

module.exports = CollectionDetail;
