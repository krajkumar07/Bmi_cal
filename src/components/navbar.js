import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav>
<Link to=''>units(M)</Link>
<Link to='/us'>units(US)</Link>
<Link to="/calculator">help</Link>
        </nav>
    )
}
export default Navbar;