import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Forget from "./Forget";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <>
      <Router>
        <Link to="/signup">Signup</Link> ||
        <Link to="/login">Login</Link> ||
        <Link to="/home">Home</Link>
      
        <br/><br/>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/forget" element={<Forget/>}/>
        </Routes>
      </Router>
      
      
      </>
    )
  }
}
export default App;
