const React = require("react");

class Edit extends React.Component {
  render() {
    const log = this.props.logs;
    return (
      <form action={`/logs/${log._id}?_method=PUT`} method="POST">
        Title:
        <input type="text" name="title" defaultValue={log.title} />
        Entry: <input type="textarea" name="entry" defaultValue={log.entry} />
        Is the Ship Broken:
        {log.shipIsBroken ? (
          <input type="checkbox" name="shipIsBroken" defaultChecked />
        ) : (
          <input type="checkbox" name="shipIsBroken" />
        )}
        <input type="submit" value="Submit Changes" />
      </form>
    );
  }
}
module.exports = Edit;
