const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;

    return (
      <div>
        <a href="/logs/new">Create New Log</a>
        <ul>
          {logs.map((log, i) => {
            return (
              <li key={i}>
                <p>
                  <a href={`/logs/${log._id}`}>{log.title}</a>
                </p>
                <p>{log.entry}</p>
                <p>
                  {log.shipIsBroken
                    ? `The ship is broken!!!`
                    : `The ship is not broken.`}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
