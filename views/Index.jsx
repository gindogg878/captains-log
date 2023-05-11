const React = require("react");

class Index extends React.Component {
  render() {
    const { Logs } = this.props;
    return (
      <div>
        <a href="/logs/new">Create New Log</a>
        <ul>
          {Logs.map((log, i) => {
            return (
              <li key={i}>
                <p>{log.title}</p>
                <p>{log.entry}</p>
                <p>{log.shipIsBroken}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
