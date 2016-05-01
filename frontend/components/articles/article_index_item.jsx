var React = require("react");

var ArticleIndexItem = React.createClass({
  render: function () {
    var entry = this.props.entry;
    var imageUrl = getImageUrl(entry);

    var image;
    image = imageUrl ? <img src={imageUrl} /> : <img src="http://dummyimage.com/600x400/46b0a4/414582.png&text=Curiously,+there+is+no+image" />;

    var content = getContent(entry);

    return (
      <div className="article-index-item">
        <div>
          {image}
        </div>
        <h4>{entry.title}</h4>
        <p>{content}</p>
      </div>
    );
  }
});


var getContent = function (entry) {
  var dummyEl = document.createElement('div');
  var content;

  if (entry.summary) {
    dummyEl.innerHTML = entry.summary;
    var paragraphs = dummyEl.getElementsByTagName('p');
    if (paragraphs.length !== 0) {
      content = paragraphs[0].innerText.length >= paragraphs[1].innerText.length ? paragraphs[0].innerText : paragraphs[1].innerText;
    } else {
      if (entry.content) {
        dummyEl.innerHTML = entry.content;
        paragraphs = dummyEl.getElementsByTagName('p');

        if (paragraphs.length !== 0) {

          content = paragraphs[0].innerText.length >= paragraphs[1].innerText.length ? paragraphs[0].innerText : paragraphs[1].innerText;
        }
      }
    }
  }

  return content;
};

var getImageUrl = function (entry) {
  var imgRegex = /src="([^"]+)"/;
  var imageUrl;

  if (entry.summary) {
    imageUrl = entry.summary.match(imgRegex);

    if (imageUrl) {
      imageUrl = imageUrl[1];
    } else {
      if (entry.content) {
        imageUrl = entry.content.match(imgRegex);

        if (imageUrl) {
          imageUrl = imageUrl[1];
        }
      }
    }
  }

  return imageUrl;
};

module.exports = ArticleIndexItem;
