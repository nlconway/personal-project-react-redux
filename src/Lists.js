import React from "react";
import PullRequestList from "./PullRequestList";
import ForkRequestList from "./ForkRequestList";
class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      // pullRequests: [],
      forkRequests: [],
      pullList: [],
      forkList: [],
      loadingStatus: false
    };
  }
  componentDidMount() {
    //Fetch list info etc etc etc
    const username = this.state.username;
    fetch(`https://api.github.com/users/${username}/events`)
      // fetch("https://api.github.com/users/pkanal/events")
      .then(response => {
        return response.json();
      })
      .then(response2 => {
        // this.setState(
        //   {
        //     pullrequests: response2.filter(event => event.type === "PullRequestEvent").map(event => {
        //       var obj = {}
        //       return obj["url"] = event.payload.pull.request.url
        //     })})
        // var newPullRequest = response2
        //   .filter(event => event.type === "PullRequestEvent")
        //   .map(event => event.payload.pull_request.url);
        var forkAndPull = {
          fork: [],
          pull: []
        };

        forkAndPull = response2.reduce((accum, event) => {
          if (event.type === "PullRequestEvent") {
            return {
              ...accum,
              pull: [
                ...accum.pull,
                {
                  url: event.repo.url,
                  pullurl: event.payload.pull_request.url
                }
              ]
            };
          } else if (event.type === "ForkEvent") {
            return {
              ...accum,
              fork: [
                ...accum.fork,
                {
                  name: event.payload.forkee.full_name,
                  url: event.payload.forkee.html_url,
                  source: event.repo.name
                }
              ]
            };
          }
          return accum;
        }, forkAndPull);
        console.log(forkAndPull.pull);
        var test = [...forkAndPull.fork];
        console.log("test: ", test);
        this.setState({ pullList: forkAndPull.pull });
        this.setState({ forkList: forkAndPull.fork });

        this.setState({ loadingStatus: true });

        console.log("pullrequest: ", this.state.pullList);

        return;
      });
  }

  render() {
    return (
      <div>
        {this.state.loadingStatus ? (
          <div>
            <PullRequestList pullrequests={this.state.pullList} />
            <ForkRequestList forkrequests={this.state.forkList} />
          </div>
        ) : (
          <h1>Test1234</h1>
        )}
      </div>
    );
  }
}
export default Lists;
