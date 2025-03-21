import POPCSS from '../../Quick Navigation/Popular in 2024/Pop2024.module.css'
import LeftColumn from '../LeftColumn/LeftColumn'
import React, { useState,useEffect} from 'react'
import Plus from '../../../assets/icons/Plus'
import Windows from '../../../assets/icons/Windows'
import Playstation from '../../../assets/icons/Playstation'
import Xbox from '../../../assets/icons/Xbox'
import Nintendo from '../../../assets/icons/Nintendo'
import IOS from '../../../assets/icons/iOS'
import { useOutletContext } from 'react-router-dom'
import {GamesDetails,ModalGames,gamesStates} from '../../../main'
import Checkmark from '../../../assets/icons/CheckMark'


function AllTime(){

  const{setNumberOfGames,setModalGames,gamesStates,setGamesStates} = useOutletContext<{
        setNumberOfGames: React.Dispatch<React.SetStateAction<number>>;
        setModalGames:    React.Dispatch<React.SetStateAction<ModalGames[]>>;
        ModalGames: ModalGames[]
        gamesStates:gamesStates[],
        setGamesStates:React.Dispatch<React.SetStateAction<gamesStates[]>>
    }>()
   
 
    const Apikey = "2bcc24482f844476a6b3935319801e0c"

    const [Loading,setLoading] = useState(true)

    const [data,setData] = useState<GamesDetails | null>(null)

 

     


    const[Platforms,setPlatforms] = useState<JSX.Element[][] | null>(null)


    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(`https://api.rawg.io/api/games?key=${Apikey}&page_size=40`)
            const result = await response.json()

         


            const FormattedData:GamesDetails={
                GamesData:result.results
            }

            setData(FormattedData)
             
            
        }
        fetchData()
         
        
    },[])

    

 
    
    function GamePlatforms(){

            

        const tempArray:JSX.Element[][]=Array.from({length:40},()=>[])// Initalzing 20 inner arrays
        for(let i=0;i<40;i++){
            for(let j=0;j<data!.GamesData[i].parent_platforms.length;j++){

               switch(data!.GamesData[i].parent_platforms[j].platform.name){
                    case "PC":
                        tempArray[i].push(<Windows></Windows>)
                        break;

                    case "PlayStation":
                        tempArray[i].push(<Playstation></Playstation>)
                        break;

                    case "Xbox":
                        tempArray[i].push(<Xbox></Xbox>)
                        break;
                    
                    case "Apple Macintosh":
                        tempArray[i].push(<IOS></IOS>)
                        break;

                    case "Nintendo":
                        tempArray[i].push(<Nintendo></Nintendo>)
                        break;
                }

            }
        }

        setPlatforms(tempArray)
    
        setLoading(false)

      }


      
      function AddGame(gameNumber:number){
         
        setModalGames(G=>[...G, {Game: data!.GamesData[gameNumber],gameIndex:gameNumber}])
        setNumberOfGames(G=>G+=1)
        setGamesStates(prevGamesStates =>
            prevGamesStates.map((gameState, index) => {
              if (index === 2) {
                return {
                  ...gameState,
                  gameIndexes: Array.isArray(gameState.gameIndexes[0])
                    ? (gameState.gameIndexes as boolean[][]).map((row, rowIndex) =>
                        row.map((value, colIndex) =>
                          colIndex === gameNumber ? true : value
                        )
                      )
                    : (gameState.gameIndexes as boolean[]).map((value, i) =>
                        i === gameNumber ? true : value
                      ),
          
                  gameNames: Array.isArray(gameState.gameNames[0])
                    ? (gameState.gameNames as string[][]).map((row, rowIndex) =>
                        rowIndex === gameNumber
                          ? row.map(name => data!.GamesData[gameNumber].name)
                          : row
                      )
                    : (gameState.gameNames as string[]).map((name, i) =>
                        i === gameNumber ? data!.GamesData[gameNumber].name : name
                      )
                };
              }
              return gameState;
            })
          );
      }
  

      useEffect(()=>{   
        if(data!=null){
              GamePlatforms()
           }    
      },[data])


      return(
        <div className={POPCSS.PageContainer}>
            <LeftColumn></LeftColumn>
            <div className={POPCSS.RightSide}>
                {Loading? (
                        <h1>Loading</h1>  
                ):(
                    <div className={POPCSS.RightSideContainer}>
                    <h1>Popular in 2024</h1>
                    <div className={POPCSS.GameCardsContainer}>
                        {data?.GamesData.map((game,index)=>(
                            <div className={POPCSS.GameCard} key={index}>
                                <div className={POPCSS.Top}>
                                    <img src={game.background_image as string}></img>
                                </div>
                                <div className={POPCSS.Below}>
                                    <div className={POPCSS.Left}>
                                     
                                        <div style={{display:!gamesStates[2].gameIndexes[index]===true? "": "none"}} className={POPCSS.LeftTopNotAdded} onClick={()=>AddGame(index)}>
                                            <h3>Add to cart</h3>
                                            <Plus></Plus>
                                        </div>
                                              
                                        <div style={{display:gamesStates[2].gameIndexes[index]===true? "": "none"}}  className={POPCSS.LeftTopAdded} onClick={()=>AddGame(index)}>
                                            <h3>Added</h3>
                                            <Checkmark></Checkmark>
                                        </div>

                                        <div className={POPCSS.Platforms}>
                                            {Platforms![index].map((platform,idx)=>(
                                                React.cloneElement(platform,{key:idx})
                                            ))}
                                        </div>
                                        <h2>{game.name}</h2>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}

                    </div>
                    </div>
                )}      
            </div>            
        </div>
    )

}

export default AllTime