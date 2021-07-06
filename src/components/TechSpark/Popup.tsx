import React from "react"
import PostCreation from "components/TechSpark/PostCreation"
import "./Popup.css"
import SignIn from "./SignIn"

function Popup(props : any){
    function hideChild(){
        console.log("Popup hidden")
        props.hidePost()
    }
    function sendName(userName: string){
        props.setName(userName)
    }
    function displayChild(){
            switch(props.windowType){
            case 1:
                console.log("Post window clicked")    
                return(
                    <PostCreation
                    close = {hideChild}/>
                )
            case 2:
                console.log("Login clicked")
                return(
                    <SignIn
                        close = {hideChild}
                        handleName = {sendName}/>
                )
            default:
                console.log("Default rendered")
                return(
                    <PostCreation close = {hideChild}/>
                )
            }
    }
    
    return(
        <div className="popup">
            <div className="popup__background" onClick={hideChild}/>
            <div className="popup__inner">
                {displayChild()}
            </div>
        </div>
    );
}
export default Popup