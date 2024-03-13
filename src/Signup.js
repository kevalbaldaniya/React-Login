import React from "react";

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"",Email:"",Password:"",Mobile:""}
    }
   
    Savedata(e){
    
     /*var a = this.state.name;*/
     localStorage.setItem("name",e.target.value);
     this.setState({name: this.state.name})
     
    }
    
    Emaildata(e){
        var b = this.state.Email;
        localStorage.setItem("Email",e.target.value);
    this.setState({Email:b})
    }

    Passworddata(e){
        var c = this.state.Password;
        localStorage.setItem("Password",e.target.value);
        this.setState({Password:c});
    }

    Mobiledata(e){
        var d = this.state.Mobile;
        localStorage.setItem("Mobile",e.target.value);
        this.setState({Mobile:d});
    }
    
    Click(){
        window.location.pathname = "/Login"
    }
   

    render(){

        var mycolor = {
            backgroundColor: "yellow",
        }

       
        return(
           
           
            <div>
            <h1 style={mycolor}>Signup</h1>
            Name : <input type="text" name="name" onChange={this.Savedata.bind(this)}/><br/><br/>
            Email : <input type="email" name="email"  onChange={this.Emaildata.bind(this)}/><br/><br/>
            Password: <input type="password" onChange={this.Passworddata.bind(this)}/><br/><br/>
            Mobile : <input type="number" onChange={this.Mobiledata.bind(this)}/><br/><br/>
            <input type="submit" value="submit" onClick={this.Click.bind(this)}/>
            </div>
            
        )
    }
}
export default Signup;