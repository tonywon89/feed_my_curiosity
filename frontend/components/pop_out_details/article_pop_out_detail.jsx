var React = require("react");

var ArticlePopOutDetail = React.createClass({
  render: function () {
    var entry = this.props.entry;
    var datePublished = parseDate(entry.published);
    return (
      <div className="article-pop-out-detail">
        <div className="article-pop-out-header">
          <h1 className="article-pop-out-header">{entry.title}</h1>
          <h6>By {entry.author} / Published: {datePublished}</h6>
        </div>
      </div>
    );
  }
});

var parseDate = function (date) {
  var date = new Date(date);
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var weekdayNames = [
    "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday",
    "Sunday"
  ];

  var dayOfWeek = date.getDay();
  var dayOfMonth = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return (weekdayNames[dayOfWeek] + ", " + monthNames[monthIndex] + " " + dayOfMonth + ", " + year);
};

module.exports = ArticlePopOutDetail;
