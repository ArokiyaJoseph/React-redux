import React from "react";
import { connect } from "react-redux";

function Display(props) {
  return (
    <div>
      <p>
        Hello {props.user.fName}
        {props.user.lName}
      </p>
    </div>
  );
}

const mapSateToProps = state => ({
  user: state.userStore.myData
});

export default connect(mapSateToProps)(Display);
