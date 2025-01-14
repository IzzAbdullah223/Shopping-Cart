import HeaderCSS from '../Header/Header.module.css'
import Logo from '../assets/Images/logo.png'
import Cart from '../assets/Images/cart1.svg'
import Magnify from '../assets/Images/magnify.svg'
import { useRef, useState } from 'react'
import Modal from '../Modal/Modal'

function Header(){

    const[modal,setModal] = useState(false)
    const toggleModal = () =>{
        setModal(!modal)
    }


    const SearchBarContainerRef = useRef<HTMLDivElement | null>(null)


    const Animation=()=>{
           SearchBarContainerRef.current?.classList.add("SearchBarContainerAnimation")
    }

    return(
        <div className={HeaderCSS.HeaderContainer}>
            <div className={HeaderCSS.LeftSide}>
                <img src={Logo}></img>
                <h2 className={HeaderCSS.HeaderTitle}>Game Harbor</h2>
            </div>
            <div ref={SearchBarContainerRef} className={HeaderCSS.SearchBarContainer}>
                <input type='text' placeholder='Search games...' onClick={Animation}></input>
                <img src={Magnify}></img>
            </div>
            <img src={Cart} onClick={toggleModal}></img>
            <Modal modal={modal} toggleModal={toggleModal}></Modal>
        </div>
    )

}

export default Header