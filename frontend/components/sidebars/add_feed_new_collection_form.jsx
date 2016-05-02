var React = require("react");

var AddFeedNewCollectionForm = React.createClass({
  render: function () {
    return (
      <li className="add-feed-collection new-collection-form">
        <form>
          <input type="text" placeholder="Name of collection" />
          <input type="submit" value="Create" />
        </form>
      </li>
    );
  }
});

module.exports = AddFeedNewCollectionForm;
