import { useEffect } from "react"

import "./styles.css"

const Header = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="header-container">
            <h1>A brand and product designer working with clients globally</h1>
            <div>
                <p>Expertise</p>
                <p>Branding</p>
                <p>Product</p>
                <p>Design Systems</p>
            </div>
        </div>
    )
}

export default Header