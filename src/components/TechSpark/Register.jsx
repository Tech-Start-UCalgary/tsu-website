import "./Register.css"
import "./SignIn.css"
import logo from "images/tech-start-logo-white.png";
import React, { Component, useEffect, useRef, useLayoutEffect } from 'react';
import axios from "axios";

const dataRoot = "https://techstartbackend.herokuapp.com"

function Register(props){

    const[successfulRegister, setSuccesfulRegister] = React.useState(false)
    const[invalidInput, setInvalidInput] = React.useState(false)

    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
      
        if(firstUpdate.current){
            firstUpdate.current =false;
            return;
        }
        
        if((document.getElementById('registerEmail').value == "")||(document.getElementById('registerFirstName').value == "")||
        (document.getElementById('registerLastName').value == "")||(document.getElementById('registerPassword').value == "")){
          setInvalidInput(true);
          return;
      }else{
        setInvalidInput(false);
      }

        axios.post(
            `${dataRoot}/register`, {
                username: document.getElementById('registerEmail').value,
                email: document.getElementById('registerEmail').value,
                first_name: document.getElementById('registerFirstName').value,
                last_name: document.getElementById('registerLastName').value,
                password: document.getElementById('registerPassword').value
            }
          ).then((response) => {
                
                let data = response.data.json;
                props.hide();
                console.log(data)                
                
          }, (error) => {
            console.log(error);
          });
           
    });

    function handleRegister(event){
      event.preventDefault();
        setSuccesfulRegister(!successfulRegister);
    }

    return (
        <div className = "registerStyling">
               <link rel="stylesheet"
                 href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
             <div className = "registerHeading">Register
               {/* <img src = {logo} className = "registerLogo"/>
                <h3 className = "registerStyling">Register</h3>*/}
             </div>  
            
            <p className = "registerIntro">Make an account to interact with the community page</p>
            <form className = "registerForm">
            <div className="registerNameDiv">
                <div className = "registerFirstNameInput">
                <i className="fa fa-user icon">
                  </i>
                    <input type="text" id="registerFirstName" placeholder = "First Name"/>
                </div>
                <div className = "registerLastNameInput">
                <i className ="fa fa-user icon">
                  </i>
                    <input type="text" id="registerLastName" placeholder = "Last Name"/><br></br>
                </div>
                <div id="clear"/>
                </div>
                <div className = "registerDiv">
                    <i className ="fa fa-envelope icon">
                  </i>
                    <input type="text" id="registerEmail" placeholder = "Email"/><br></br>
                </div>
                <div className = "registerDiv">
                     <i className ="fa fa-key icon">
                    </i>
                    <input type="password" id="registerPassword" placeholder="Password"/><br></br>
                </div>
                <input type="submit" id = "registerSubmit" value = "Get Started!" onClick = {handleRegister}/>

            </form>
            <div className = "switchToLogin">
                <h5 className = "logInLink">Already have an account?</h5>
                 <button className= "loginSwitch" onClick = {props.switchMode} ><i className="fa fa-lock icon">
                  </i> Log In</button>
                  <div id="clearRegister" />
            </div>
            {invalidInput ?
                    <div className = "registerAlert">
                        <p className = "registerAlertMessage">**You have not entered the necessary information**</p>
                    </div>  : <div />}
        </div>
        );
}

export default Register;