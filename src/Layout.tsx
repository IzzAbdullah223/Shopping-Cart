import {Outlet,useLocation} from 'react-router-dom'
import Header from './Header/Header'
import LayoutCSS from './Layout.module.css'
import PykeVideo from  './assets/Images/pyke.mp4'

interface modalGame{
    Name:string,
    Picture:string
}

interface LayOutProps{
    numberOfGames:number,
    setNumberOfGames: React.Dispatch<React.SetStateAction<number>>
    modalGames:modalGame[],
    setModalGames: React.Dispatch<React.SetStateAction<modalGame[]>>
}

function Layout({numberOfGames,modalGames,setNumberOfGames,setModalGames}: LayOutProps){
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
            <Header numberOfGames={numberOfGames} modalGames={modalGames}></Header>
            <Outlet context={{setNumberOfGames,setModalGames}}></Outlet>
        </div>
    )
}

export default Layout