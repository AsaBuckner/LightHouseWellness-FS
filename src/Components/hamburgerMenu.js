import React from "react";
import { Link } from "react-router-dom";


export default function Hamburger() {
    return (
       <div>
            { /* add social Links at the top */ }
            <ul>
                <li><button>CLASSES</button></li>
                <li><button>STORE</button>
                    <ul>
                        <button>HERBS || TEAS</button>
                        <button>CANDLES || INSCENSE</button>
                        <button>EQUIPMENT</button>
                    </ul>
                </li>
            </ul>
            
        </div> 
    )
}
