import "./Login.css"
import React, { useLayoutEffect, useRef } from 'react';
import axios from "axios";

const dataRoot = "https://techstartbackend.herokuapp.com"

function Login(props: any) {

    const [tracker, setTracker] = React.useState(false)
    // const [invalidUsername, setInvalidUsername] = React.useState(false)
    // const [invalidPassword, setInvalidPassword] = React.useState(false)
    const [invalidLogin, setInvalidLogin] = React.useState(false)
    const [message, setMessage] = React.useState("")
    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        let username = document.getElementById('loginUsername')
        let password = document.getElementById('loginPassword')
        setInvalidLogin(false);
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        if (!username) {
            setInvalidLogin(true);
            setMessage("**You have entered an invalid username**");
            return;
        } else if (!password) {
            setInvalidLogin(true);
            setMessage("**You have entered an invalid password**");
            return;
        } 
        axios.post(
            `${dataRoot}/login`, {
            username: (username as HTMLFormElement).value,
            password: (password as HTMLFormElement).value
        }
        ).then((response) => {

            // let token = response.data.token;
            props.hide();
            props.name(response.data.first);

        }, (error) => {
            console.log("Error is ", error);
            setInvalidLogin(true);
            if (error.response.data.username){
                setMessage("**Username must not be blank**")
            }else if (error.response.data.password){
                setMessage("**Password must not be blank**")
            } else if(error.response.data.non_field_errors){
                setMessage("**" + error.response.data.non_field_errors + "**")
            }


        });
    }, [tracker]);

    function handleLogin(event: any) { // The event parameter will automatically be passed by React's onClick - read more at https://reactjs.org/docs/events.html
        event.preventDefault(); // This makes it so that pressing the button does not reload the page
        // Additionally, right now we are using document.getElementById to pass the results to the useEffect. This is theoretically functional, but it's not the best practice in React.
        // https://reactjs.org/docs/forms.html#handling-multiple-inputs This is a great alternative way of doing it using form names + state. 
        // I would also consider changing this into a TypeScript file eventually. You will have to strong-type certain variables, (see the WebDev guide for info, and you'd have to search what the appropriate types are for certain objects), but it could be very helpful for debugging.
        setTracker(!tracker);
    }

    return (
        <div className="loginStyling">
            <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <h1 className="loginHeading">Login</h1>
            <form className="loginForm">
                <div className="loginDiv">
                    <i className="fa fa-envelope icon">
                    </i>
                    <input id="loginUsername" type="text" placeholder="Email" />

                </div>
                <div className="loginDiv">
                    <i className="fa fa-key icon">
                    </i>
                    <input type="password" id="loginPassword" placeholder="Password" />

                </div>
                <input type="submit" id="loginSubmit" value="Login" onClick={handleLogin} />


            </form>
            <div className="switchStyling">
                <h5 className="registerLink">Don't have an account?</h5>
                <button className="registerSwitch" onClick={props.switchMode}><i className="fa fa-user icon">
                </i> Sign Up</button>
                <div id="clearLogin" />
                
            </div>
                {invalidLogin ?
                    <div className = "alert">
                        <p className = "alertMessage">{message}</p>
                    </div>  : <div />}
        </div>
    );
}

export default Login;