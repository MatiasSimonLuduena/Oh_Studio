import "./styles.css"
import { imagesOrVideos } from "./data"

const Main = () => {
  return (
    <div className="main-container">
        { imagesOrVideos.map((item, index) => 
            <div key={index} className="main_div">
                { 
                    item.src.includes("images") ?
                    <div>
                        <img alt="img" src={item.src} className="main_image" />
                    </div>
                    :
                    <video autoPlay loop muted playsInline>
                        <source src={item.src} type="video/mp4"></source>
                    </video> 
                }
                <p>{ item.title }</p>
                <img alt="icon" src="icons/arrow.png" className="main_arrow" />
            </div>
        ) }
    </div>
  )
}

export default Main