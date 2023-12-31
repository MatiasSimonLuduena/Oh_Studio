import "./styles.css"

import { NavLink, Link } from "react-router-dom"

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
            <Link className="nav-shop" to="/coming-soon">
                <a>Shop</a>
            </Link>
        </div>
    )
}

export default Navbar