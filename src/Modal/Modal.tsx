import {useEffect,useRef } from 'react'
import ModalCSS from './Modal.module.css'
import { ModalGames } from '../main'


type modalProps={
    modal:boolean,
    toggleModal:()=>void,
    numberOfGames:number,
    ModalGames:ModalGames[],
    setModalGames: React.Dispatch<React.SetStateAction<ModalGames[]>>
}

function Modal({modal,toggleModal,numberOfGames,ModalGames,setModalGames}:modalProps){
 
  

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


    function deleteGame(index:number){
        console.log(setModalGames)
    }

    return(
    
         <>
            {modal && (
                    <div className={ModalCSS.Modal}>
                        <div className={ModalCSS.Overlay}></div>
                            <div ref={ModalArea} className={ModalCSS.ModalContent}>
                                <div className={ModalCSS.Top}>
                                    <h2>Games: {numberOfGames}</h2>
                                    <h3>Clear</h3>
                                </div>
                                <div className={ModalCSS.ModalGamesContainer}>
                                {ModalGames.map((_,index)=>(
                                    <div className={ModalCSS.ModalGame} key={index}>
                                        <button className={ModalCSS.DeleteGame} onClick={()=>deleteGame(index)}>X</button>
                                        <div className={ModalCSS.GameInfo}>
                                            <div className={ModalCSS.ImageContainer}>
                                                <img src={ModalGames[index].Game.background_image}></img>
                                            </div>
                                        <div className={ModalCSS.GameDetails}>
                                            <h3>{ModalGames[index].Game.name}</h3>
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