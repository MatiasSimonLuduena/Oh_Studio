import "./styles.css"

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-div_out">
                <div className="active">
                    <a>Home</a>
                </div>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Contact</a>
                </div>
            </div>
            <div className="nav-shop">
                <a>Shop</a>
            </div>
        </div>
    )
}

export default Navbar