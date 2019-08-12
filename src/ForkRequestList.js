import React from "react";

class ForkRequestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forkrequest: props.forkrequests
    };
    // this.setState({pullrequest: props.pullrequests});
    //console.log("state in pullrequestlist", this.state.pullrequest);
    // console.log(this.state.pullrequest);
  }
  componentDidMount() {
    console.log("Fork Request", this.state.forkrequest);
    //console.log("list in pullrequest props: ", this.state.pullrequest);
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
        <h4>ForkRequestList</h4>
        {this.state.forkrequest.map((request, i) => {
          return (
            <div key={i}>
              <p>
                Url: <a href={request.url}>{request.name}</a> Forked From:{" "}
                {request.source}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default ForkRequestList;
