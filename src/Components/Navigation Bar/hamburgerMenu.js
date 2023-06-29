import React from "react";
import { Link } from "react-router-dom";


export default function Hamburger() {
    return (
       <div className="hamburgerMenu">
            { /* add social Links at the top */ }
            <ul>
                <li><button>CLASSES</button></li>
                <li><button>STORE</button>
                    <ul>
                        <li><button>HERBS || TEAS</button></li>
                        <li><button>CANDLES || INSCENSE</button></li>
                        <li><button>EQUIPMENT</button></li>
                    </ul>
                </li>
            </ul>
            
        </div> 
    )
}
