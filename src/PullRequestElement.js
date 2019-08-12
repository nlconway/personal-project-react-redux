import React from "react";
class PullRequestElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingStatus: false,
      status: "unknown",
      url: props.url,
      requesturl: props.requrl
    };
  }

  componentDidMount() {
    fetch(this.state.requesturl)
      .then(event => event.json())
      .then(response => {
        this.setState({ status: response.state });
        this.setState({ loadingStatus: true });
        return;
      });
  }

  render() {
    return (
      <div>
        {this.state.loadingStatus ? (
          <p>
            url: <a href={this.state.url}>{this.state.url}</a> status:{" "}
            {this.state.status}
          </p>
        ) : (
          <h1>Loading Pull Request List</h1>
        )}
      </div>
    );
  }
}
export default PullRequestElement;
