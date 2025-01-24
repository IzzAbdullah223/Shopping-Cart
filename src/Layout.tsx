import {Outlet,useLocation} from 'react-router-dom'
import Header from './Header/Header'
import LayoutCSS from './Layout.module.css'
import PykeVideo from  './assets/Images/pyke.mp4'
import {ModalGames} from './main'


interface LayOutProps{
    numberOfGames:number,
    setNumberOfGames: React.Dispatch<React.SetStateAction<number>>,
    ModalGames:ModalGames[],
    setModalGames: React.Dispatch<React.SetStateAction<ModalGames[]>>
}

function Layout({numberOfGames,setNumberOfGames,ModalGames,setModalGames}: LayOutProps){
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
            <Header setNumberOfGames={setNumberOfGames} numberOfGames={numberOfGames} setModalGames={setModalGames} ModalGames={ModalGames}></Header>
            <Outlet context={{setNumberOfGames,setModalGames,ModalGames}}></Outlet>
        </div>
    )
}

export default Layout