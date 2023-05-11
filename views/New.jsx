const React = require("react");

class New extends React.Component {
  render() {
    return (
      <form action="/logs" method="POST">
        Title:
        <input type="text" name="title" />
        Entry: <input type="textarea" name="entry" />
        Is the Ship Broken: <input type="checkbox" name="shipIsBroken" />
        <input type="submit" value="Create Log" />
      </form>
    );
  }
}
module.exports = New;
