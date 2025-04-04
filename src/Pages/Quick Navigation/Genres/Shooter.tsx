import POPCSS from '../../Quick Navigation/Popular in 2024/Pop2024.module.css'
import LeftColumn from '../LeftColumn/LeftColumn'
import React, { useState,useEffect} from 'react'
import Plus from '../../../assets/icons/Plus'
import Windows from '../../../assets/icons/Windows'
import Playstation from '../../../assets/icons/Playstation'
import Xbox from '../../../assets/icons/Xbox'
import Nintendo from '../../../assets/icons/Nintendo'
import Androids from '../../../assets/icons/Android'
import ChevronDown from '../../../assets/icons/ChevronDown'
import LoadingComponent from '../../../LoadingComponent'
import { useOutletContext } from 'react-router-dom'
import {ModalGames,gamesStates,PlayDiceGame} from '../../../main'
import Checkmark from '../../../assets/icons/CheckMark'
import IOSPIC from '../../../assets/icons/IOSPIC'


 

function Shooter(){
    const Apikey = "2bcc24482f844476a6b3935319801e0c"
    interface Platform{
         name:string
    }
    interface Results{
        name:String,
        background_image:String,
        parent_platforms:Platforms[]
    }
    interface GamesDetails{
        PopularData:Results[],
        RatingData:Results[],
        ReleaseData:Results[]
    }

    interface Platforms{
        platform:Platform
    }

      const{setNumberOfGames,setModalGames,gamesStates,setGamesStates,gameStateIndex,setGameStateIndex,ModalGames,PlayDiceGames} = useOutletContext<{
            setNumberOfGames: React.Dispatch<React.SetStateAction<number>>;
            setModalGames:    React.Dispatch<React.SetStateAction<ModalGames[]>>;
            ModalGames: ModalGames[]
            PlayDiceGames:PlayDiceGame[]
            gamesStates:gamesStates[],
            setGamesStates:React.Dispatch<React.SetStateAction<gamesStates[]>>
            gameStateIndex:number
            setGameStateIndex:React.Dispatch<React.SetStateAction<number>>
        }>()

    const [Loading,setLoading] = useState(true)

    const [Loading2,setLoading2]= useState(true)

    const [shouldStartTimer,setShouldStartTimer] = useState(true)

    const [data,setData] = useState<GamesDetails | null>(null)

    const [currentData,setCurrentData] = useState<Results[]|null>(null)

    const[Platforms,setPlatforms] = useState<JSX.Element[][] | null>(null)

    const[selectedItem,setSelectedItem] = useState<String>("Popularity")

    const [isMenuVisible,setMenuIsVisible] = useState(false)

    const [isSelectorVisible,setSelectorVisible] = useState(true)
 
    


    useEffect(()=>{
        const fetchData = async ()=>{
            const popularResponse = await fetch(`https://api.rawg.io/api/games?genres=shooter&key=${Apikey}`)
            const result = await popularResponse.json()

           const ratingResponse = await fetch(`https://api.rawg.io/api/games?genres=shooter&ordering=-rating&key=${Apikey}`)
           const result2 = await ratingResponse.json()

           const releaseResponse = await fetch(`https://api.rawg.io/api/games?genres=shooter&ordering=released&key=${Apikey}`)
           const result3 = await releaseResponse.json()


            const FormattedData:GamesDetails={  
                PopularData:result.results,
                RatingData:result2.results,
                ReleaseData:result3.results
            }
           
            setData(FormattedData)
            setCurrentData(FormattedData.PopularData)
            setGameStateIndex(29)
            
        }
        fetchData()
         
    },[])

                                        useEffect(()=>{
                                            if(data)
                                            CheckIfGameInCart()
                                        },[ModalGames,PlayDiceGames,data])
                                    
                                    
                                        function CheckIfGameInCart(){
                                            const ModalGamesSet = new Set(ModalGames.map(game=>game.Game.name))
                                            const PlayDiceGamesSet = new Set(PlayDiceGames.map(game=>game.name))
                                    
                                            const allGames= new Set([
                                                ...ModalGamesSet,
                                                ...PlayDiceGamesSet
                                            ])
                                    
                                            setGamesStates(prevState => 
                                                prevState.map((item, i) => {
                                                  if (i === 29 && data?.PopularData) {
                                                    return { 
                                                      ...item, 
                                                      gameIndexes: item.gameIndexes.map((_, index) => 
                                                        allGames.has(data.PopularData[index]?.name) ? true : false
                                                      ) 
                                                    };
                                                  } 
                                                  if (i === 31 && data?.RatingData) {
                                                    return { 
                                                      ...item, 
                                                      gameIndexes: item.gameIndexes.map((_, index) => 
                                                        allGames.has(data.RatingData[index]?.name) ? true : false
                                                      ) 
                                                    };
                                                  } 
                                                  if (i === 30 && data?.ReleaseData) {
                                                    return { 
                                                      ...item, 
                                                      gameIndexes: item.gameIndexes.map((_, index) => 
                                                        allGames.has(data.ReleaseData[index]?.name) ? true : false
                                                      ) 
                                                    };
                                                  }
                                                  return item;
                                                })
                                              );
                                        }



      useEffect(()=>{   
        if(data!=null){
             GamePlatforms()
              switch(selectedItem){

                case "Popularity":
                    setCurrentData(data.PopularData)
                    break;

                case "Rating":
                    setCurrentData(data.RatingData)
                    break;

                case "Release Date":
                    setCurrentData(data.ReleaseData)
                    break;
              }


        }

           
      },[currentData,selectedItem])


    
      function GamePlatforms():void{
       const tempArray:JSX.Element[][]=Array.from({length:20},()=>[])// Initalzing 20 inner arrays
        for(let i=0;i<20;i++){
            for(let j=0;j<currentData![i].parent_platforms.length;j++){

               switch(currentData![i].parent_platforms[j].platform.name){
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
                        tempArray[i].push(<IOSPIC></IOSPIC>)
                        break;

                    case "Nintendo":
                        tempArray[i].push(<Nintendo></Nintendo>)
                        break;

                    case "Android":
                        tempArray[i].push(<Androids></Androids>)
                }

            }
        }

        setPlatforms(tempArray)
    
        setLoading(false)
      }

      function ShowDropDown():void{
        setSelectorVisible(S=>S=!S)
        setMenuIsVisible(M=>M=!M)
      }

      function setPopularity():void{
        setLoading2(true)
        setSelectedItem("Popularity")
        setSelectorVisible(S=>S=!S)
        setMenuIsVisible(M=>M=!M)
        setShouldStartTimer(true)
       setGameStateIndex(29)
      }


      function setReleaseDate():void{
        setLoading2(true)
        setSelectedItem("Release Date")
        setSelectorVisible(S=>S=!S)
        setMenuIsVisible(M=>M=!M)
        setShouldStartTimer(true)
        setGameStateIndex(30)
      }

      function setRating():void{
        setLoading2(true)
        setSelectedItem("Rating")
        setSelectorVisible(S=>S=!S)
        setMenuIsVisible(M=>M=!M)
        setShouldStartTimer(true)
        setGameStateIndex(31)
      }

      function AddGame(gameNumber:number){
 
        setModalGames(G=>[...G, {Game: currentData![gameNumber],gameIndex:gameNumber} as ModalGames])
        setNumberOfGames(G=>G+1)
        setGamesStates(prevGamesStates => 
            prevGamesStates.map((gameState, index) => 
              index === gameStateIndex  
                ? {
                    ...gameState,
                    gameIndexes: gameState.gameIndexes.map((value, i) => 
                      i === gameNumber ? true : value,  
                      gameState.gameNames[gameNumber] = currentData![gameNumber].name
                      
                    )
                  }
                : gameState
            )
          ); 
   
      }

         useEffect(()=>{
           if(shouldStartTimer){
           const timer = setTimeout(()=>{
               setLoading2(false)
               setShouldStartTimer(false)
           },1500)
           return ()=> clearTimeout(timer)
       }
       },[shouldStartTimer])

      return(
        <div className={POPCSS.PageContainer}>
            <LeftColumn></LeftColumn>
            <div className={POPCSS.RightSide}>
                {Loading? (
                    <h1>Loading</h1>
                ):(
                    <div className={POPCSS.RightSideContainer}>
                    <h1>Shooter</h1>

                        <div className={POPCSS.SelectContainer} onClick={ShowDropDown} style={{display:isSelectorVisible? "flex":"none"}}>
                            <div>Order by: </div>
                            <h3>{selectedItem}</h3>
                            <ChevronDown></ChevronDown>
                        </div>

                        <div className={POPCSS.CustomDropDown} style={{display: isMenuVisible? "flex": "none"}}>
                    
                            <div className={POPCSS.ItemContainer} onClick={setReleaseDate}> 
                                <div>
                                    <div>Release date</div>
                                    <Checkmark></Checkmark>
                                </div>
                            </div>

                            <div className={POPCSS.ItemContainer} onClick={setPopularity}> 
                                <div>
                                    <div>Popularity</div>
                                    <Checkmark></Checkmark>
                                </div>
                            </div>

                            <div className={POPCSS.ItemContainer} onClick={setRating}> 
                                <div>
                                    <div>Rating</div>
                                    <Checkmark></Checkmark>
                                </div>
                            </div>
                        </div>

                        
                        {Loading2 ? (
                        <div className={POPCSS.LoadingContainer}>
                                <LoadingComponent></LoadingComponent>
                        </div>
                    ) :(
                        <div className={POPCSS.GameCardsContainer}>
                        {currentData?.map((game,index)=>(
                            <div className={POPCSS.GameCard} key={index}>
                                <div className={POPCSS.Top}>
                                    <img src={game.background_image as string}></img>
                                </div>
                                <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    
                                    
                                     <div style={{display:!gamesStates[gameStateIndex].gameIndexes[index]===true? "": "none"}} className={POPCSS.LeftTopNotAdded} onClick={()=>AddGame(index)}>
                                         <h3>Add to cart</h3>
                                         <Plus></Plus>
                                     </div>
                                           
                                     <div style={{display:gamesStates[gameStateIndex].gameIndexes[index]===true? "": "none"}}  className={POPCSS.LeftTopAdded} onClick={()=>AddGame(index)}>
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
                    )}
             
                    </div>
                )}
            </div>
        </div>
    )
}
export default Shooter
