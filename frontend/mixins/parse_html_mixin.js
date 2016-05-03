
var ParseHTMLMixin = {
  getContent: function (entry) {
    var content;
    content = this.getDiv(entry);
    if (!content) {
      content = this.getParagraph(entry);
    }
    return content;
  },

  getImageUrl: function (entry) {
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
  },

  getParagraph: function (entry) {
    var paragraph;
    if (entry.summary) {
      paragraph = this.getInnerText(entry.summary, 'p');
      if (!paragraph) {
        if (entry.content) {
          paragraph = this.getInnerText(entry.content, 'p');
        }
      }
    } else {
      if (entry.content) {
        paragraph = this.getInnerText(entry.content, 'p');
      }
    }
    return paragraph;
  },

  getDiv: function (entry) {
    var div;
    if (entry.summary) {
      div = this.getInnerText(entry.summary, 'div');

      if (!div) {
        if (entry.content) {
          div = this.getInnerText(entry.content, 'div');
        }
      }
    } else {
      if (entry.content) {
        div = this.getInnerText(entry.content, 'div');
      }
    }

    return div;
  },

  getInnerText:  function (htmlString, selector) {
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
  }
};

module.exports = ParseHTMLMixin;
