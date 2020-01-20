import React, { Component } from "react";
import { setUserData } from "./redux/action";
import { connect } from "react-redux";

class Form extends Component {
  state = {
    user: [
      {
        fName: "",
        lName: ""
      }
    ]
  };

  firstName(e) {
    let updatedValue = e.target.value;
    this.setState(prevState => ({
      user: { ...prevState.user, fName: updatedValue }
    }));
  }

  lastName(e) {
    let updatedValue = e.target.value;
    this.setState(prevState => ({
      user: { ...prevState.user, lName: updatedValue }
    }));
  }

  clickMe() {
    this.props.setUserData(this.state.user)
    this.props.history.push("/display");
  }

  render() {
    return (
      <div>
        <strong>FirstName:
        <input
          type="text"
          value={this.state.user.fName}
          onChange={(e) => this.firstName(e)}
        /></strong>
        <br />
        <strong>LastName:
        <input
          type="text"
          value={this.state.user.lName}
          onChange={(e) => this.lastName(e)}
        /></strong>
        <br />
        <button onClick={() => this.clickMe()}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userStore.myData
});

const mapDispatchToProps = { setUserData };

export default connect(mapStateToProps, mapDispatchToProps)(Form);
