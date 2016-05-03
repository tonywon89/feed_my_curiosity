var React = require("react");

var ParseHTML = require("../../mixins/parse_html_mixin");

var FeedPopOutArticleItem = React.createClass({
  render: function () {
    var entry = this.props.entry;
    var imageUrl = ParseHTML.getImageUrl(entry);

    var image;
    image = imageUrl ? <img src={imageUrl} /> : <img src="http://dummyimage.com/600x400/46b0a4/414582.png&text=Curiously,+there+is+no+image" />;

    var content = ParseHTML.getContent(entry);
    return (
      <li className="feed-article-item">
        <div>
          {image}
        </div>
        {this.props.entry.title}
      </li>
    );
  }
});

module.exports = FeedPopOutArticleItem;
