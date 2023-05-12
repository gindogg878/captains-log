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
                <a href={`/logs/${log._id}/edit`}>Edit Log</a>
                {/*delete button ,use form because we need to make request to database, we cant use handleclick in server side*/}
                {/*forms can only make post and get methods */}
                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
