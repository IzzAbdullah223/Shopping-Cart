import React, {useEffect,useRef } from 'react'
import ModalCSS from './Modal.module.css'
import { ModalGames,gamesStates,PlayDiceGame} from '../main'
import { useOutletContext } from 'react-router-dom'


type modalProps={
    modal:boolean,
    toggleModal:()=>void,
    numberOfGames:number,
    setNumberOfGames: React.Dispatch<React.SetStateAction<number>>;
    ModalGames:ModalGames[],
    setModalGames: React.Dispatch<React.SetStateAction<ModalGames[]>>
    gamesStates:gamesStates[]
    setGamesStates:React.Dispatch<React.SetStateAction<gamesStates[]>>
    PlayDiceGames:PlayDiceGame[]
    setPlayDiceGames:React.Dispatch<React.SetStateAction<PlayDiceGame[]>>
    GameAdded:boolean
    setGameAdded:React.Dispatch<React.SetStateAction<boolean>>
 
}

function Modal({modal,toggleModal,numberOfGames,ModalGames,setModalGames,setNumberOfGames,setGamesStates,PlayDiceGames,setPlayDiceGames,GameAdded,setGameAdded}:modalProps){


     
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
       
        setModalGames(ModalGames.filter((_,index)=>index!==gameIndex))
        setNumberOfGames(n=>n-1)
        setGamesStates((prevStates) => {
            return prevStates.map((state) => ({
                ...state,
                gameNames: state.gameNames.map((name, _) =>
                    name === ModalGames[gameIndex].Game.name ? "" : name
                ),
                gameIndexes: state.gameIndexes.map((index, i) =>
                    state.gameNames[i] === ModalGames[gameIndex].Game.name ? false : index
                ),
            }));
        });
    }

    function DeletePlayDiceGame(GameName:String){
        setNumberOfGames(n=>n-1)
        setPlayDiceGames(PlayDiceGames.filter((Game)=>Game.name!==GameName))
        setGameAdded(false)
    }

    function clearGames(){
        setModalGames([])
        setPlayDiceGames([])
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
                                                <button onClick={()=>deleteGame(index)}>x</button>
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
                                    {PlayDiceGames.map((ModalGame,index)=>(
                                    <div className={ModalCSS.ModalGame} key={index}>
                                        <div className={ModalCSS.ModalGameTop}>
                                                <button onClick={()=>DeletePlayDiceGame(ModalGame.name)}>x</button>
                                        </div>
                                        <div className={ModalCSS.ModalGameBottom}>
                                            <div className={ModalCSS.GameImageContainer}>
                                                <img src={ModalGame.background_image}></img>
                                            </div>
                                            <div className={ModalCSS.GameInfo}>
                                                <div className={ModalCSS.GameNme}>{ModalGame.name}</div>
                                                <div className="">12.98</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                                <h3 className={ModalCSS.Total}>Total: $120</h3>
                            </div>
                    </div>
            )}
        </>

    )

}

export default Modal