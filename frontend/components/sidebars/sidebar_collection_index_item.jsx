var React = require("react");

var SidebarCollectionIndexItem = React.createClass({
  render: function () {

    var collectionItemIconClass = "fa fa-angle-right collection-index-item-icon";

    return (
      <div className="collection-index-item">
        <i className={collectionItemIconClass}></i>
        {this.props.collection.name}
      </div>
    );
  }
});

module.exports = SidebarCollectionIndexItem;
