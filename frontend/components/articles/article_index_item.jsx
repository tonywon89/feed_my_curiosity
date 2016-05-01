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

var getContent = function (entry) {
  var content;
  content = getDiv(entry);
  if (!content) {
    content = getParagraph(entry);
  }
  return content;
};

var getParagraph = function (entry) {
  var paragraph;
  if (entry.summary) {
    paragraph = getInnerText(entry.summary, 'p');
    if (!paragraph) {
      if (entry.content) {
        paragraph = getInnerText(entry.content, 'p');
      }
    }
  }
  return paragraph;
};

var getDiv = function (entry) {
  var div;
  if (entry.summary) {
    div = getInnerText(entry.summary, 'div');

    if (!div) {
      if (entry.content) {
        div = getInnerText(entry.content, 'div');
      }
    }
  }

  return div;
};

var getInnerText = function (htmlString, selector) {
  var dummyEl = document.createElement('div');
  dummyEl.innerHTML = htmlString;
  if (selector === 'div') {
    return dummyEl.innerText;
  } else {
    var result = dummyEl.getElementsByTagName(selector);
  }


  var innerText;
  if (result.length > 1) {
    innerText = result[0].innerText.length >= result[1].innerText.length ? result[0].innerText : result[1].innerText;
  } else if (result.length > 0) {
    innerText = result[0].innerText;
  }
  debugger;

  return innerText;
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
  } else {
    if (entry.content) {
      imageUrl = entry.content.match(imgRegex);

      if (imageUrl) {
        imageUrl = imageUrl[1];
      }
    }
  }



  return imageUrl;
};

module.exports = ArticleIndexItem;
