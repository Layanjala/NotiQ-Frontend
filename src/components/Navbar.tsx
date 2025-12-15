import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
	return 
    <div> 
       <h1>REACT.</h1>
       <ul>
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Sources</li>
       </ul>

    </div>;
}

export default Navbar;
