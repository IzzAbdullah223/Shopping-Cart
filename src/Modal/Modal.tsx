import { useState,useEffect,useRef } from 'react'
import ModalCSS from './Modal.module.css'

function Modal(){

    const [modal,setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!modal)
    }

    const ModalArea = useRef<HTMLDivElement>(null);

  
//From here to Line 27  
    useEffect(()=>{  // close modal when clicking outside
       let handler= (event:MouseEvent)=>{
            if(ModalArea.current && !ModalArea.current.contains(event.target as Node)){
            setModal(!modal)
            }
        };
        document.addEventListener("mousedown",handler);

        return()=>{  //Cleaning up the event listener 
            document.removeEventListener("mousedown",handler)
        };
    });
    return(
    
         <>
           <button onClick={toggleModal} className={ModalCSS.ModalBTN}>Open Modal</button>
            {modal && (
                    <div className={ModalCSS.Modal}>
                        <div className={ModalCSS.Overlay}></div>
                            <div ref={ModalArea} className={ModalCSS.ModalContent}>
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