import HeaderCSS from './Header.module.css'
import Logo from '../assets/Images/logo.png'
import Magnify from '../assets/icons/Magnify'
import Cart from '../assets/icons/Cart'
import Modal from '../Modal/Modal'
import {useState} from 'react'


function Header(){

    const[modal,setModal] = useState(false)

        const toggleModal = () => {
            setModal(!modal)
        }

        const Animation = () =>{
          document.querySelector(`.${HeaderCSS.SearchBarContainer}`)?.classList.add("SearchBarContainerAnimation")
        }

    return(
        <div className={HeaderCSS.HeaderContainer}>
            <div className={HeaderCSS.LeftSide}>
                <img src={Logo}></img>
                <h1>Game Harbor</h1>
            </div>
            <div className={HeaderCSS.SearchBarContainer} onClick={Animation}>
                <input type='text' placeholder='Search games...'></input>
                <Magnify></Magnify>
            </div>
            <Cart onClick={toggleModal}></Cart>
            <Modal modal={modal} toggleModal={toggleModal}></Modal>
        </div>
    )

}

export default Header