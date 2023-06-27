import React, {useState} from "react";
import { Router, Switch, Route } from "react-router-dom";
import Hamburger from "./Components/hamburgerMenu";
import "./index.css";

export function App(){

    const [hamburger, setHamburger] = useState(false)

    //Universal function to toggle from true to false
    const handleToggle = (current, setter) => {
    
        setter(!current);
        //console.log(current);
        //Returns Opposite of current state
    }

    return(
        <div className="Wrapper">
            
    { /* page Router */ }

        {/* <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/Classes" component={Login} />
                <Route path="/Store" component={Login} />
            </Switch>
        </Router> */}




    {/* NAV BAR */ }


            <div className="nav">
                <h1>The Light House</h1>
                <button className="bookClass">| Book A Class --〉|</button>

    {/* Change this to a () ? login : profile  when integrating a 3rd party login system */ }
                <button className="Login">Login</button>

                <button className="hamburger" onClick={() => {handleToggle(hamburger, setHamburger)}}>⌯</button>
                
            </div>

            {hamburger ? <Hamburger /> : null}
            


    { /*PAGE HEAD*/ }


        </div>
    )
}