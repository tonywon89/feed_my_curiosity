var React = require("react");

var ParseHTML = require("../../mixins/parse_html_mixin");

var ArticleIndexItem = React.createClass({
  handlePopOutClick: function (event) {
    var popOutItem = {type: "article", content: this.props.entry};
    this.props.displayPopOutDetail(popOutItem);
  },

  render: function () {
    var entry = this.props.entry;
    var imageUrl = ParseHTML.getImageUrl(entry);

    var image;
    image = imageUrl ? <img src={imageUrl} /> : <img src="http://dummyimage.com/600x400/46b0a4/414582.png&text=Curiously,+there+is+no+image" />;

    var content = ParseHTML.getContent(entry);

    return (
      <div className="article-index-item" onClick={this.handlePopOutClick}>
        <div className="image-wrapper">
          {image}
        </div>
        <div className="wrapper">
          <h4>{entry.title}</h4>
        </div>
        <div className="wrapper">
          <p>{content}</p>
        </div>
      </div>
    );
  }
});

module.exports = ArticleIndexItem;
