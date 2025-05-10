import github from '../../assets/Images/github.svg'
import RAWG from '../../assets/Images/RAWG.png'
import Dice from '../../assets/Images/dice.svg'
import Tiles from '../../assets/Images/tiles.svg'
import Star from '../../assets/Images/star.svg'
import Rating from '../../assets/Images/rating.svg'
import Trophy from '../../assets/Images/Trophy.svg'
import Crown from '../../assets/Images/crown.svg'
import ContentCSS from '../HomePage/Content.module.css'
import {Link} from 'react-router-dom'

function HomePage() {
  

  return (
  <div className={ContentCSS.MiddleContainer}>
      <div className={ContentCSS.LeftSide}>
        <div className={ContentCSS.LeftTop}>
            <h1>Game Port</h1>
            <p>It's not a commercial project. you can't buy any games here <span> and all of the prices are generated to imitate a real game shop.</span></p>
            <div>Enjoy 😉</div>
        </div>
        <div className={ContentCSS.LeftBottom}>
          
            <a className={ContentCSS.BottomGit} href='https://github.com/IzzAbdullah223'>
                <img src={github}></img>
                <div >Link to GitHub</div>
            </a>
             
            <a className={ContentCSS.BottomR} href='https://rawg.io/apidocs'>
                <img src={RAWG}></img>
                <div>RAWG API</div>
            </a>
        </div>
      </div>

      <div className={ContentCSS.Navigation}>
        <h2>Quick Navigation</h2>
        <Link to="PlayDice" className={ContentCSS.Link}> 
            <img src={Dice}></img>
            <h3>Play Dice</h3>
        </Link>
        <Link to="AddedGames" className={ContentCSS.Link}>
            <img src={Tiles}></img>
            <h3>Added Games</h3>
        </Link>
        <Link to="Last30Days" className={ContentCSS.Link}>
            <img src={Star}></img>
            <h3>Last 30 days</h3>
        </Link>
         
        <Link to="PopularIn2024" className={ContentCSS.Link}>
           <img src={Rating}></img>
             <h3>Popular in 2024</h3>  
        </Link>
         
        <Link to="BestOfTheYear" className={ContentCSS.Link} >
            <img src={Trophy}></img>
            <h3>Best of the year </h3>
        </Link>
        <Link to="AllTimeTop" className={ContentCSS.Link}>
            <img src={Crown}></img>
            <h3>All time top</h3>
        </Link>
      </div>

  </div>
  )

}

export default HomePage