var React = require("react");

var ParseHTML = require("../../mixins/parse_html_mixin");

var FeedPopOutArticleItem = React.createClass({

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
      <li className="feed-article-item" onClick={this.handlePopOutClick}>
        <div className="article-image">
          {image}
        </div>
        <div className="article-info">
          <h4>{entry.title}</h4>
          <p>{content}</p>
          <h6>by {entry.author}</h6>
        </div>
      </li>
    );
  }
});

module.exports = FeedPopOutArticleItem;
