var React = require("react");

var ArticleIndexItem = React.createClass({
  render: function () {
    return (
      <div className="article-index-item">
        {this.props.entry.title}
      </div>
    );
  }
});

module.exports = ArticleIndexItem;
