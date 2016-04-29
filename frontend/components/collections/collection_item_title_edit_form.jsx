var React = require("react");

var CollectionItemTitleEditForm = React.createClass({
  getInitialState: function () {
    return { name: this.props.collection.name };
  },

  nameChange: function (event) {
    this.setState({ name: event.target.value });
  },

  render: function () {
    return (
      <div>
        <h3>Rename Colletion </h3>
        <form>
          <input type="text" onChange={this.nameChange} value={this.state.name} />
          <input type="submit" value="Rename Collection" />
        </form>
      </div>
    );
  }
});

module.exports = CollectionItemTitleEditForm;
