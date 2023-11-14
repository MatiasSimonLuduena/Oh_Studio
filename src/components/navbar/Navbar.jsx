import "./styles.css"

import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-div_out">
                <div>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                </div>
                <div>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
            <div className="nav-shop">
                <NavLink to="/shop">Shop</NavLink>
            </div>
        </div>
    )
}

export default Navbar