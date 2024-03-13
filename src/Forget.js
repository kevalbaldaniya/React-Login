import React from "react";

class Forget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OldPassword: "",
      NewPassword: "",
      ConfirmPassword: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    var pass = localStorage.getItem("Password");

    if (pass === this.state.OldPassword && this.state.NewPassword === this.state.ConfirmPassword) {
      localStorage.removeItem("Password");
      localStorage.setItem("Password", this.state.NewPassword);
      alert("Password changed successfully");
    } else {
      alert("Wrong password ...");
    }
  };

  render() {
    return (
      <>
       <h2 style={{backgroundColor:"aqua"}}>Change Password</h2>
        Old Password:<input type="Password" name="OldPassword" onChange={this.onChange.bind(this)} /><br /><br/>
        New Password:<input type="Password" name="NewPassword" onChange={this.onChange.bind(this)} /><br /><br/>
        Confirm Password:<input type="Password" name="ConfirmPassword" onChange={this.onChange.bind(this)} /><br /><br/>
        <button onClick={this.handleClick.bind(this)}>Change password</button>
      </>
    );
  }
}

export default Forget;
