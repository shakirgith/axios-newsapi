// import axios from 'axios';
import React, { useState } from "react";
import { Component } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
  


class Login extends Component {
  constructor (){
  super();
    this.state = {
      name: '',
      password: ''
    }
}

login() {
  console.warn(this.state)
  fetch("http: //localhost:3000/login?g=" +   this.state.name).then((data) => {
      data.json().then((resp)=> {
        console.warn("resp", resp)
        if (resp.length > 0) {
          localStorage.setItem('login',JSON.stringify(resp))
          console.warn(this.props.history.push('list'))
        }
        else {
        alert ("Pelase check username and password")
      }
    })
  })
}


  // const [userData, setUserData] = useState({ username: "", password: "" });
  // const [errorMessage, setErrorMessage] = useState({ value: "" });
  // const history = useHistory();
  // console.log("auth", localStorage.getItem("isAuthenticated"));

  // const handleInputChange = (e) => {
  //   setUserData((prevState) => {
  //     return {
  //       ...prevState,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   //if username or password field is empty, return error message
  //   if (userData.username === "" || userData.password === "") {
  //     setErrorMessage((prevState) => ({
  //       value: "Empty username/password field",
  //     }));
  //   } else if (userData.username == "admin" && userData.password == "123456") {
  //     //Signin Success
  //     localStorage.setItem("isAuthenticated", "true");
  //     window.location.pathname = "/";
  //   } else {
  //     //If credentials entered is invalid
  //     setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
  //   }
  // };

  render () {
  return (
    
    <div id="login" className='container m-auto'>
      <h2 className="text-center">Login</h2>

      <form>
        
        <div className="col-6 m-auto">
            <label for="uname"><b>Username</b></label>
            <input className="form-control" type="text" placeholder="Enter Username" name="user"  onChange={(event) => this.useState({name: event.target.value})}  />

            <label for="psw"><b>Password</b></label>
            <input className="form-control" type="password" placeholder="Enter Password" name="password"    onChange={(event) => this.useState({password: event.target.value})}/>

            <button type="submit" onClick={() => {this.login()}}>Login</button>
        </div>

        {/* {errorMessage.value && (
          <p className="text-danger"> {errorMessage.value} </p>
        )} */}
        </form>
     
    </div>
  )
}
}
export default Login