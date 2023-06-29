import React from "react";
import Hamburger from "./hamburgerMenu";
import Arrow from "../../Images/Arrow.png";


export default function Nav(props) {
    const {hamburger,setHamburger ,dropDown ,setDropDown ,handleToggle} = props
return(

<div>
   <div className="nav">
        <h1>The Light House</h1>

        <div className="navButtons">
        
        <button > About</button>
{/* Add the Drop Down -- In-Person || On-Demand */ }

        <button onClick={() => {handleToggle(dropDown, setDropDown)}}> Classes </button>
        <button > Shop </button>
        <button > Events </button>
        <button > Membership </button>
        <button > Contact </button>


        <button className="bookClass"> Book A Class <img className="Arrow" src={Arrow} /></button>

{/* Change this to a () ? login : profile  when integrating a 3rd party login system */ }
        <button className="Login">Login</button>

        <button className="hamburger" onClick={() => {handleToggle(hamburger, setHamburger)}}>⌯</button>
        </div>

    </div>

    {hamburger ? <Hamburger /> : null}
</div>
)
}