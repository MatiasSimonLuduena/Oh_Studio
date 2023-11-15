import "./styles.css"
import { useEffect } from "react"

import { cards, images } from "./data"

const Profile = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="profile-container" id="profile">
      <div className="profile-div_h1">
        <h1>Hey 👋🏼 I&apos;m Oli</h1>
      </div>
      <div className="profile-div_imgs">
        <img 
          src="https://framerusercontent.com/images/wJINOk3BFAbQRx6ZySXfbltPxU.jpg"
          alt="image 1"
        />
        <img
          src="https://framerusercontent.com/images/O3Foxt0XkzTsjGc74Ap0Hrxtz4c.jpg"
          alt="image 2"
        />
      </div>
      <div className="profile-about">
        <div>
          <p>About</p>
        </div>
        <h2>A freelance designer based in the UK. I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.</h2>
      </div>
      <div className="profile-about">
        <div>
          <p>Experience</p>
        </div>
        <h2>Where I&apos;ve worked</h2>
      </div>
      <div className="profile-cards">
        {cards.map((item, index) => (
          <div key={index}>
            <p>{ item.date }</p>
            <p>{ item.title }</p>
            <p>{ item.type }</p>
            <div>
              <p>{ item.typeDiv }</p>
            </div>
          </div>
        ))}
      </div>
      <div className="profile-about">
        <div>
          <p>Clients</p>
        </div>
        <h2>Who I&apos;ve worked with</h2>
      </div>
      <div className="profile-cards_images">
        {images.map((item, index) => (
          <div key={index}>
            <img alt="image" src={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile