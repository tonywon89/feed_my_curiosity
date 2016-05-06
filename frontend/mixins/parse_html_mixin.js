var ParseHTMLMixin = {
  getContent: function (entry) {
    var content;
    content = getDiv(entry);
    if (!content) {
      content = getParagraph(entry);
    }
    return content;
  },

  getImageUrl: function (entry) {
    var imgRegex = /src="([^"]+)"/;
    var imageUrl;

    imageUrl = checkSummary(entry, imgRegex);

    if (!imageUrl) {
      imageUrl = checkContent(entry, imgRegex);
    }

    return imageUrl;
  }
};

var checkSummary = function (entry, regex) {
  var imageUrl;

  if (entry.summary) {
    imageUrl = checkItemForUrl(entry.summary, regex);

    if (!imageUrl) {
      imageUrl = checkContent(entry, regex);
    }
  }

  return imageUrl;
};

var checkContent = function (entry, regex) {
  var imageUrl;
  if (entry.content) {
    imageUrl = checkItemForUrl(entry.content, regex);
  }
  return imageUrl;
};

var checkItemForUrl = function (entry, regex) {
  var imageUrl = entry.match(regex);
  if (imageUrl) {
    imageUrl = setImageUrl(imageUrl);
  }
  return imageUrl;
};

var setImageUrl = function (imageUrl) {
  var result;
  if (imageUrl[1].indexOf("http://feeds.feedburner.com/") === -1 && imageUrl[1].indexOf("youtube") === -1) {
    result = imageUrl[1];
  } else {
    result = undefined;
  }
  return result;
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
  } else {
    if (entry.content) {
      paragraph =
      getInnerText(entry.content, 'p');
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
  } else {
    if (entry.content) {
      div = getInnerText(entry.content, 'div');
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

  return innerText;
};

module.exports = ParseHTMLMixin;
