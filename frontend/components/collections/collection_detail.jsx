var React = require("react");
var hashHistory = require("react-router").hashHistory;

var CollectionStore = require("../../stores/collection_store");
var ArticleIndex = require("../articles/article_index");

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

    var collectionName, content;
    if (collection) {
      collectionName = <h1>{collection.name}</h1>;
      content = collection.feeds.map(function(feed) {
        return <ArticleIndex key={feed.id} feed={feed} />;
      });
    }

    return (
      <div className="collection-detail">
        {collectionName}
        <div className="collection-detail-articles">
          {content}
        </div>
      </div>
    );
  }
});

module.exports = CollectionDetail;
