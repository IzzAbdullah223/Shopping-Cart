import LastCSS from './LeftColumn.module.css' 
import Tiles from '../../../assets/icons/Tiles'
import Star from '../../../assets/icons/Star'
import Fire from '../../../assets/icons/Fire'
import Skip from '../../../assets/icons/Skip'
import Trophy from '../../../assets/icons/Trophy'
import Rating from '../../../assets/icons/Rating'
import Crown from '../../../assets/icons/Crown'
import Windows from '../../../assets/icons/Windows'
import Playstation from '../../../assets/icons/Playstation'
import Xbox from '../../../assets/icons/Xbox'
import Nintendo from '../../../assets/icons/Nintendo'
import IOS from '../../../assets/icons/IOSPIC'
import Android from '../../../assets/icons/Android'
import Action from '../../../assets/icons/Action'
import Strategy from '../../../assets/icons/Strategy'
import RPG from '../../../assets/icons/RPG'
import Shooter from '../../../assets/icons/Shooter'
import Adventure from '../../../assets/icons/Adventure'
import Puzzle from '../../../assets/icons/Puzzle'
import Racing from '../../../assets/icons/Racing'
import Sports from '../../../assets/icons/Sports'
import { NavLink } from 'react-router-dom'


function LeftColumn(){

    return(
        
        <div style={LastCSS}>
        <div className={LastCSS.LeftColumn}>


            <div className={LastCSS.YourGames}>
                <h1>Your Games</h1>
                <div className={LastCSS.YourGamesList}> 
                    <div className={LastCSS.IconContainer}>
                        <Tiles></Tiles>
                    </div>
                    <h3>Added Games</h3>
                </div>
            </div>

            <div className={LastCSS.YourGames}>
                <h1>NewReleases</h1>
                <div className={LastCSS.ReleaseList}>
                    <NavLink to="/Last30Days" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                        <div className={LastCSS.IconContainer}>
                         <Star></Star>
                        </div>
                    <h3>Last 30 Days</h3>
                    </NavLink>

                    <NavLink to="/ThisWeek" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer} ${LastCSS.Fire}`}>
                        <Fire></Fire>
                    </div>
                    <h3>This week</h3>
                    </NavLink>


                    <NavLink to="/NextWeek" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer} ${LastCSS.Skip}`}>
                        <Skip></Skip>
                    </div>
                    <h3>Next week</h3>
                    </NavLink> 

                </div>
            </div>

            <div className={LastCSS.YourGames}>
                <h1>Top</h1>
                <div className={LastCSS.ReleaseList}>

                    <NavLink to="/BestOfTheYear" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                        <div className={LastCSS.IconContainer}>
                         <Trophy></Trophy>
                        </div>
                    <h3>Best of the year</h3>
                    </NavLink>

                    <NavLink to="/PopularIn2024" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer} ${LastCSS.Rating}`}>
                        <Rating></Rating>
                    </div>
                    <h3>Popular in 2024</h3>
                    </NavLink>


                    <NavLink to="/AllTimeTop" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer} ${LastCSS.Crown}`}>
                        <Crown></Crown>
                    </div>
                    <h3>All time top</h3>
                    </NavLink> 

                </div>
            </div>

                <div className={LastCSS.YourGames}>
                    <h1>Platforms</h1>
                    <div className={LastCSS.ReleaseList}>

                    <NavLink to="/PC" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                        <div className={LastCSS.IconContainer}>
                         <Windows></Windows>
                        </div>
                    <h3>PC</h3>
                    </NavLink>

                    <NavLink to="/PlayStation" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer} ${LastCSS.Playstation}`}>
                        <Playstation></Playstation>
                    </div>
                    <h3>PlayStation</h3>
                    </NavLink>


                    <NavLink to="/XboxOne" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer}`}>
                        <Xbox></Xbox>
                    </div>
                    <h3>Xbox One</h3>
                    </NavLink>


                    <NavLink to="/Nintendo" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer} ${LastCSS.Nintendo}`}>
                        <Nintendo></Nintendo>
                    </div>
                    <h3>Nintendo</h3>
                    </NavLink>


                    <NavLink to="/iOS" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer}`}>
                        <IOS></IOS>
                    </div>
                    <h3>iOS</h3>
                    </NavLink>


                    <NavLink to="/Android" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer}`}>
                         <Android></Android>
                    </div>
                    <h3>Android</h3>
                    </NavLink> 


                </div>
            </div>

                    <div className={LastCSS.YourGames}>
                    <h1>Genres</h1>
                    <div className={LastCSS.ReleaseList}>

                    <NavLink to="/Action" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                        <div className={`${LastCSS.IconContainer} ${LastCSS.Action}`}>
                         <Action></Action>
                        </div>
                    <h3>Action</h3>
                    </NavLink>


                    <NavLink to="/Strategy" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer} ${LastCSS.Strategy}`}>
                        <Strategy></Strategy>
                    </div>
                    <h3>Strategy</h3>
                    </NavLink>

                    <NavLink to="/Rpg" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer}`}>
                         <RPG></RPG>
                    </div>
                    <h3>RPG</h3>
                    </NavLink>


                    <NavLink to="/Shooter" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer}`}>
                        <Shooter></Shooter>
                    </div>
                    <h3>Shooter</h3>
                    </NavLink>


                    <NavLink to="/Adventure" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer}`}>
                        <Adventure></Adventure>
                    </div>
                    <h3>Adventure</h3>
                    </NavLink>


                    <NavLink to="/Puzzle" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer}`}>
                        <Puzzle></Puzzle>
                    </div>
                    <h3>Puzzle</h3>
                    </NavLink>


                    <NavLink to="/Racing" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer}`}>
                        <Racing></Racing>
                    </div>
                    <h3>Racing</h3>
                    </NavLink>


                    <NavLink to="/Sports" className={({isActive})=>
                    isActive? `${LastCSS.test} ${LastCSS.ActiveLink}`: LastCSS.Test}> 
                    <div className={`${LastCSS.IconContainer}`}>
                        <Sports></Sports>
                    </div>
                    <h3>Sports</h3>
                    </NavLink>  
                </div>
            </div>      
     

        </div>
        </div>
    )

}
export default LeftColumn