import { useState,useEffect } from 'react'
import ModalCSS from './Modal.module.css'

function Modal(){

    const [modal,setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!modal)
    }


    useEffect(()=>{  // close modal when clicking outside 
        document.addEventListener("mousedown",()=>{
            setModal(!modal)
        })
    })



    return(
    
         <>
         <button onClick={toggleModal} className={ModalCSS.ModalBTN}>Open Modal</button>
            {modal && (
                    <div className={ModalCSS.Modal}>
                        <div className={ModalCSS.Overlay}></div>
                            <div className={ModalCSS.ModalContent}>
                                <div className={ModalCSS.Top}>
                                    <h2>0 Games</h2>
                                    <h3>Clear</h3>
                                </div>
                                <h3>Total: $ 0</h3>
                            </div>
                    </div>

            )}
 

            
        </>

    )

}

export default Modal