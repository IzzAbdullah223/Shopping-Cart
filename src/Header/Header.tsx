import HeaderCSS from './Header.module.css'
import Logo from '../assets/Images/logo.png'
import Magnify from '../assets/icons/Magnify'
import Cart from '../assets/icons/Cart'
import Modal from '../Modal/Modal'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { ModalGames } from '../main'

 

interface HeaderProps{
    numberOfGames:number,
    ModalGames:ModalGames[],
    setModalGames: React.Dispatch<React.SetStateAction<ModalGames[]>>,
    setNumberOfGames: React.Dispatch<React.SetStateAction<number>>;
    gamesState:boolean[][],
    setGamesStates: React.Dispatch<React.SetStateAction<boolean[][]>>
}

function Header({numberOfGames,ModalGames,setModalGames,setNumberOfGames,gamesState,setGamesStates}:HeaderProps){
 

      

    const[modal,setModal] = useState(false)

        const toggleModal = () => {
            setModal(!modal)
        }

   
    return(
        <div className={HeaderCSS.HeaderContainer}>
            <Link to="/" className={HeaderCSS.LeftSide}>
                <img src={Logo}></img>
                <h1>Game Harbor</h1>
            </Link>
            <div className={HeaderCSS.SearchBarContainer}>
                <input type='text' placeholder='Search games...'></input>
                <Magnify></Magnify>
            </div>
            <div className={HeaderCSS.ShoppingCartContainer}> 
                <Cart onClick={toggleModal}></Cart>
                <div className={HeaderCSS.BlueDot} style={{display: numberOfGames==0? "none": ""}}></div>
            </div>
            <Modal gameStates = {gamesState} setGamesStates = {setGamesStates} setNumberOfGames={setNumberOfGames} setModalGames={setModalGames} numberOfGames={numberOfGames} modal={modal} ModalGames={ModalGames} toggleModal={toggleModal}></Modal>
        </div>
    )

}

export default Header