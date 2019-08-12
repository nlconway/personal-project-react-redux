import React from "react";
import PullRequestElement from "./PullRequestElement.js";

class PullRequestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pullrequest: props.pullrequests
    };
    // this.setState({pullrequest: props.pullrequests});
    console.log("state in pullrequestlist", this.state.pullrequest);
    // console.log(this.state.pullrequest);
  }
  componentDidMount() {
    console.log("list in pullrequest props: ", this.state.pullrequest);
  }
  // getDerivedStateFromProps(props, state){

  // }
  // componentWillReceiveProps(nextProps){
  //   if(nextProps.pullrequests !== this.props.list){
  //        this.setState({ list: nextProps.pullrequests })
  //   }
  // }
  // handleSubmit(evt) {
  //   evt.preventDefault();
  // }
  // setValue(name, value) {
  //   this.setState({ [name]: value });
  // }

  render() {
    return (
      <div>
        {/* {this.state.requests.map()} */}
        <h4>PullRequestList</h4>
        {this.state.pullrequest.map((request, i) => {
          return (
            <PullRequestElement
              url={request.url}
              requrl={request.pullurl}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}
export default PullRequestList;
