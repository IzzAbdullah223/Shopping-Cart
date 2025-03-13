import {useEffect,useRef } from 'react'
import ModalCSS from './Modal.module.css'
import { ModalGames,gamesStates } from '../main'


type modalProps={
    modal:boolean,
    toggleModal:()=>void,
    numberOfGames:number,
    setNumberOfGames: React.Dispatch<React.SetStateAction<number>>;
    ModalGames:ModalGames[],
    setModalGames: React.Dispatch<React.SetStateAction<ModalGames[]>>
    gamesStates:gamesStates[]
    setGamesStates:React.Dispatch<React.SetStateAction<gamesStates[]>>
}

function Modal({modal,toggleModal,numberOfGames,ModalGames,setModalGames,setNumberOfGames,gamesStates,setGamesStates}:modalProps){
 
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


    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modal]);


    function deleteGame(gameIndex:number){
       /* console.log(ModalGames)
        setNumberOfGames(G=>G-1)
        setGamesStates(prevGamesStates => 
            prevGamesStates.map((gameState) => {
                for(let i=0;i<ModalGames.length;i++){
                    if(ModalGames[i].Game.name === gameState.gameNames[gameIndex]){
                        setModalGames((prevModalGame)=>prevModalGame.filter(game=>game.gameIndex!==gameIndex))
                            return{
                                ...gameState,
                                gameNames: gameState.gameNames.map((name, i) =>
                                    i === gameIndex ? "" : name // Change value at gameIndex
                                ),
                                gameIndexes: gameState.gameIndexes.map((state,i)=>

                                    i===gameIndex? false: state
                                )

                            }   
                    }
                }
              return gameState;  
            })
          );
        
     */
    }

    function clearGames(){
        setModalGames([]) // to remove the modal games 
        setNumberOfGames(0)
        setGamesStates(prevGamesStates => 
            prevGamesStates.map((gameState, index) => 
              index === 2  
                ? {
                    ...gameState,
                    gameIndexes: Array(40).fill(false)  
                  }
                : {
                    ...gameState,
                    gameIndexes: Array(20).fill(false)  
                  }
            )
          );       
    }

    return(
    
         <>
            {modal && (
                    <div className={ModalCSS.Modal}>
                        <div className={ModalCSS.Overlay}></div>
                            <div ref={ModalArea} className={ModalCSS.ModalContent}>
                                <div className={ModalCSS.Top}>
                                    <div>{numberOfGames} Games</div>
                                    <div onClick={clearGames}>Clear</div>
                                </div>
                                <div className={ModalCSS.ModalGamesContainer}>
                                {ModalGames.map((ModalGame,index)=>(
                                    <div className={ModalCSS.ModalGame} key={index}>
                                        <div className={ModalCSS.ModalGameTop}>
                                                <button>x</button>
                                        </div>
                                        <div className={ModalCSS.ModalGameBottom}>
                                            <div className={ModalCSS.GameImageContainer}>
                                                <img src={ModalGame.Game.background_image}></img>
                                            </div>
                                            <div className={ModalCSS.GameInfo}>
                                                <div className={ModalCSS.GameNme}>{ModalGame.Game.name}</div>
                                                <div className="">12.98</div>
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