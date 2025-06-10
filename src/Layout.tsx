import {Outlet,useLocation} from 'react-router-dom'
import Header from './Header/Header'
import LayoutCSS from './Layout.module.css'
import PykeVideo from  './assets/Images/pyke.mp4'
import {ModalGames,gamesStates,PlayDiceGame} from './main'
 


 
interface LayOutProps{
    numberOfGames:number,
    setNumberOfGames: React.Dispatch<React.SetStateAction<number>>,
    ModalGames:ModalGames[],
    setModalGames: React.Dispatch<React.SetStateAction<ModalGames[]>>
    gamesStates:gamesStates[],
    setGamesStates:React.Dispatch<React.SetStateAction<gamesStates[]>>
    gameStateIndex:number,
    setGameStateIndex:React.Dispatch<React.SetStateAction<number>>,
    PlayDiceGames: PlayDiceGame[],
    setPlayDiceGames: React.Dispatch<React.SetStateAction<PlayDiceGame[]>>,
    GameAdded:boolean
    setGameAdded: React.Dispatch<React.SetStateAction<boolean>>
}


function Layout({numberOfGames,setNumberOfGames,ModalGames,setModalGames,gamesStates,setGamesStates,gameStateIndex,setGameStateIndex,
PlayDiceGames,setPlayDiceGames, GameAdded,setGameAdded}: LayOutProps){


 

    const location = useLocation();
    const  isHomePage= location.pathname==='/'
    return(
        <div className={LayoutCSS.PageContainer}>
            {isHomePage && (
                <video autoPlay loop muted className={LayoutCSS.BackgroundVideo}>
                <source src={PykeVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
      )     }
            <Header gamesStates={gamesStates} setGamesStates={setGamesStates}  setNumberOfGames={setNumberOfGames} numberOfGames={numberOfGames} setModalGames={setModalGames}ModalGames={ModalGames} PlayDiceGames={PlayDiceGames} setPlayDiceGames={setPlayDiceGames} GameAdded={GameAdded} setGameAdded={setGameAdded}></Header>
            <Outlet context={{setNumberOfGames,setModalGames,ModalGames,gamesStates,setGamesStates,gameStateIndex,setGameStateIndex,PlayDiceGames,setPlayDiceGames,
                             GameAdded,setGameAdded,
            }}></Outlet>
        </div>
    )
}

export default Layout