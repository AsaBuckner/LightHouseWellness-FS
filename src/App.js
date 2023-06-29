import React, {useState} from "react";
import { Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Nav from "./Components/Navigation Bar/Nav";
import video from "./Images/Head.mp4"
import "./Components/video.css"

export function App(){

    const [hamburger, setHamburger] = useState(false)
    const [dropDown, setDropDown] = useState(false)

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
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Classes" component={Classes} />
                <Route path="/Events" component={Events} />
                <Route path="/Membership" component={Membership} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Book" component={Book} />
                <Route path="/Shop" component={Shop} />
            </Switch>
        </Router> */}




    {/* NAV BAR */ }


    <Nav hamburger={hamburger} setHamburger={setHamburger} dropDown = {dropDown} setDropDown={setDropDown} handleToggle={handleToggle}/>

            


    { /*PAGE HEAD*/ }
   <div className="main">
        <video src={video} autoPlay loop muted>
           <div className="vidText">
                <h1>YOGA. <br/>
                    MEDITATION.<br/>
                    WELLBEING.
                </h1>
            </div> 
        </video>
        
            
    </div>

    </div>
    )
}