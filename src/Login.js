import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={Email:"",Password:""}
    }
    
    
    Emaildata(e){
       this.setState({Email:e.target.value});
    }
    
    
    Passworddata(e){   
      this.setState({Password:e.target.value});
    }
    
    Click(){
      const userEmail = localStorage.getItem("Email");
      
      const userPassword = localStorage.getItem("Password");

      if(this.state.Email === userEmail && this.state.Password === userPassword){
         alert("Welcome");
         window.location = "/home"
      }else{
        alert(" plz...signup now")
      }
      
    }



    render(){
        return(
            
             <>
             <h2 style={{backgroundColor:"aqua"}}>Login</h2><br/>
             Email:<input type="email" name="email" onChange={this.Emaildata.bind(this)}/><br/><br/>
             Password:<input type="password" name="password" onChange={this.Passworddata.bind(this)}/><br/><br/>
             <input type="submit" value="Login " onClick={this.Click.bind(this)}/><br/><br/>
             <Link to="/Forget">Chenge password</Link>
             </>
             
        )
    }
}
export default Login;