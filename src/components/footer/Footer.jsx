import "./styles.css"

import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-div_top">
            <h2>Let&apos;s work together.</h2>
            <Link to="/coming-soon">
                <h2>Get in touch.</h2>
            </Link>
        </div>
        <div className="footer-div_bottom">
            <div>
                <p>© Oli Harris 2023</p>
            </div>
            <div>
                <a>Twitter</a>
                <a>Linkedin</a>
                <a>Mail</a>
            </div>
        </div>
    </div>
  )
}

export default Footer