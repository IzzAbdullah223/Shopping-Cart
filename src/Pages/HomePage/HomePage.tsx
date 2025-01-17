import Header from "../../Header/Header"
import Content from "./Content"
import HomepageCSS from "./Homepage.module.css"
import PykeVideo from '../../assets/Images/pyke.mp4'
 
function HomePage() {
  

  return (
   
      <div className={HomepageCSS.VideoContainer}>
        <video autoPlay muted loop className={HomepageCSS.BackgroundVideo}> 
            <source src={PykeVideo} type="video/mp4"></source>
            Your browser does not support
          </video>
          <div>
            <Content></Content>
          </div>
      </div>
     
  )
}

export default HomePage