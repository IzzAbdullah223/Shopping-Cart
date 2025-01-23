import HeaderCSS from './Header.module.css'
import Logo from '../assets/Images/logo.png'
import Magnify from '../assets/icons/Magnify'
import Cart from '../assets/icons/Cart'
import Modal from '../Modal/Modal'
import {useState} from 'react'
import {Link} from 'react-router-dom'

 

interface HeaderProps{
    numberOfGames:number,

}

function Header({numberOfGames}:HeaderProps){

    

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
            <Cart onClick={toggleModal}></Cart>
            <Modal numberOfGames={numberOfGames} modal={modal} toggleModal={toggleModal}></Modal>
        </div>
    )

}

export default Header