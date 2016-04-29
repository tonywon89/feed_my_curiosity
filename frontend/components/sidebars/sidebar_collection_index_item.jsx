var React = require("react");

var SidebarCollectionIndexItem = React.createClass({
  getInitialState: function () {
    return { isOpen: false };
  },

  toggleOpen: function () {
    if (this.state.isOpen) {
      this.setState({ isOpen : false });
    } else {
      this.setState({ isOpen : true });
    }
  },

  render: function () {

    var collectionItemIconClass;
    if (this.state.isOpen) {
      collectionItemIconClass = "fa fa-angle-down collection-index-item-icon";
    } else {
      collectionItemIconClass = "fa fa-angle-right collection-index-item-icon";
    }

    return (
      <div className="collection-index-item">
        <i className={collectionItemIconClass} onClick={this.toggleOpen}></i>
        {this.props.collection.name}
      </div>
    );
  }
});

module.exports = SidebarCollectionIndexItem;
