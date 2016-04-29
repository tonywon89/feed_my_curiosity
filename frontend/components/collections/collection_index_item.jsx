var React = require("react");

var CollectionIndexItemTitle = require("./collection_index_item_title");

var CollectionIndexItem = React.createClass({
  render: function () {
    return (
      <div className="collection-index-item">
        <CollectionIndexItemTitle title={this.props.collection.name} />
      </div>
    );
  }
});

module.exports = CollectionIndexItem;
