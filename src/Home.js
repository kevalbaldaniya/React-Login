import React from "react";
class Home extends React.Component {
    constructor(props){
    super(props);
    this.state = {} 
    }
    render() {
        const userEmail = localStorage.getItem("Email")
        const userPassword = localStorage.getItem("Password")
        return (
          <>
          userEmail: {userEmail};<br/>
          userPassword : {userPassword};
          </>  
        );
    }
}

export default Home;