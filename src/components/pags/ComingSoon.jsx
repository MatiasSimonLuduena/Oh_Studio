import "./styles.css"

import { Link } from "react-router-dom"

const ComingSoon = () => {
  return (
    <div className="soon-container">
      <h2>Coming soon</h2>
      <p>This page is not available at this time.<br/> Go back to continue.</p>
      <Link to="/">Go back</Link>
    </div>
  )
}

export default ComingSoon