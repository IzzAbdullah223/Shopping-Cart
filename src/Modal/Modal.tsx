import { useState,useEffect,useRef } from 'react'
import ModalCSS from './Modal.module.css'

type modalProps={
    modal:boolean,
    toggleModal:()=>void
}

function Modal({modal,toggleModal}:modalProps){
 

    const PicsTest:string[]=['https://media.rawg.io/media/games/bde/bdef96f7782fba0ff62dabc37ff4b1f0.jpg','https://media.rawg.io/media/games/bde/bdef96f7782fba0ff62dabc37ff4b1f0.jpg',
    'https://media.rawg.io/media/games/bde/bdef96f7782fba0ff62dabc37ff4b1f0.jpg',
    'https://media.rawg.io/media/games/bde/bdef96f7782fba0ff62dabc37ff4b1f0.jpg',
    'https://media.rawg.io/media/games/bde/bdef96f7782fba0ff62dabc37ff4b1f0.jpg',
    'https://media.rawg.io/media/games/bde/bdef96f7782fba0ff62dabc37ff4b1f0.jpg',
    'https://media.rawg.io/media/games/bde/bdef96f7782fba0ff62dabc37ff4b1f0.jpg',
    'https://media.rawg.io/media/games/bde/bdef96f7782fba0ff62dabc37ff4b1f0.jpg'    
    ]

    const ModalArea = useRef<HTMLDivElement>(null);

  
//From here to Line 27  
    useEffect(()=>{  // close modal when clicking outside
       let handler= (event:MouseEvent)=>{
            if(ModalArea.current && !ModalArea.current.contains(event.target as Node)){
            toggleModal();
            }
        };
        document.addEventListener("mousedown",handler);

        return()=>{  //Cleaning up the event listener 
            document.removeEventListener("mousedown",handler)
        };
    },[toggleModal]);
    return(
    
         <>
            {modal && (
                    <div className={ModalCSS.Modal}>
                        <div className={ModalCSS.Overlay}></div>
                            <div ref={ModalArea} className={ModalCSS.ModalContent}>
                                <div className={ModalCSS.Top}>
                                    <h2>0 Games</h2>
                                    <h3>Clear</h3>
                                </div>
                                <div className={ModalCSS.ModalGamesContainer}>
                                {PicsTest.map((game,index)=>(
                                    <div className={ModalCSS.ModalGame} key={index}>
                                        <button className={ModalCSS.DeleteGame}>x</button>
                                        <div className={ModalCSS.GameInfo}>
                                            <div className={ModalCSS.ImageContainer}>
                                                <img src={PicsTest[index]}></img>
                                            </div>
                                        <div className={ModalCSS.GameDetails}>
                                            <h3>V Rising</h3>
                                            <h3>12.98</h3>
                                        </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                                <h3 className={ModalCSS.Total}>Total: $ 0</h3>
                            </div>
                    </div>
            )}
        </>

    )

}

export default Modal