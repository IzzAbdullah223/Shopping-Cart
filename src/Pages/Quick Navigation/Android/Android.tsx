import POPCSS from '../../Quick Navigation/Popular in 2024/Pop2024.module.css'
import LeftColumn from '../LeftColumn/LeftColumn'
import React, { useState,useEffect} from 'react'
import Plus from '../../../assets/icons/Plus'
import Windows from '../../../assets/icons/Windows'
import Playstation from '../../../assets/icons/Playstation'
import Xbox from '../../../assets/icons/Xbox'
import Nintendo from '../../../assets/icons/Nintendo'
import IOS from '../../../assets/icons/iOS'
import AndroidI from '../../../assets/icons/Android'
import ChevronDown from '../../../assets/icons/ChevronDown'
import Checkmark from '../../../assets/icons/CheckMark'
import LoadingComponent from '../../../LoadingComponent'
import {GamesDetailsWithSelect,Results} from '../../../main'


 

function Android(){
    const Apikey = "2bcc24482f844476a6b3935319801e0c"
 

    const [Loading,setLoading] = useState(true)

    const [Loading2,setLoading2]= useState(true)

    const [shouldStartTimer,setShouldStartTimer] = useState(true)

    const [data,setData] = useState<GamesDetailsWithSelect | null>(null)

    const [currentData,setCurrentData] = useState<Results[]|null>(null)

    const[Platforms,setPlatforms] = useState<JSX.Element[][] | null>(null)

    const[selectedItem,setSelectedItem] = useState<String>("Popularity")

    const [isMenuVisible,setMenuIsVisible] = useState(false)

    const [isSelectorVisible,setSelectorVisible] = useState(true)
    


    useEffect(()=>{
        const fetchData = async ()=>{
         const popularResponse = await fetch(`https://api.rawg.io/api/games?key=${Apikey}&platforms=21`)
            const result = await popularResponse.json()

           const ratingResponse = await fetch(`https://api.rawg.io/api/games?key=${Apikey}&platforms=21&ordering=-rating`)
           const result2 = await ratingResponse.json()

           const releaseResponse = await fetch(`https://api.rawg.io/api/games?key=${Apikey}&platforms=21&ordering=-released`
           )
           const result3 = await releaseResponse.json()


            const FormattedData:GamesDetailsWithSelect={
                PopularData:result.results,
                RatingData:result2.results,
                ReleaseData:result3.results
            }
           
            setData(FormattedData)
            setCurrentData(FormattedData.PopularData)
            
        }
        fetchData()
         
    },[])



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


    
    

      function GamePlatforms(){
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
                        tempArray[i].push(<IOS></IOS>)
                        break;

                    case "Nintendo":
                        tempArray[i].push(<Nintendo></Nintendo>)
                        break;

                    case "Android":
                        tempArray[i].push(<AndroidI></AndroidI>)
                }

            }
        }

        setPlatforms(tempArray)
    
        setLoading(false)
      }

      function ShowDropDown(){
        setSelectorVisible(S=>S=!S)
        setMenuIsVisible(M=>M=!M)
      }

      function setPopularity(){
        console.log(data)
        setLoading2(true)
        setSelectedItem("Popularity")
        setSelectorVisible(S=>S=!S)
        setMenuIsVisible(M=>M=!M)
        setShouldStartTimer(true)
      }


      function setReleaseDate(){
        setLoading2(true)
        setSelectedItem("Release Date")
        setSelectorVisible(S=>S=!S)
        setMenuIsVisible(M=>M=!M)
        setShouldStartTimer(true)
      }

      function setRating(){
        setLoading2(true)
        setSelectedItem("Rating")
        setSelectorVisible(S=>S=!S)
        setMenuIsVisible(M=>M=!M)
        setShouldStartTimer(true)
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
                    <h1>Android</h1>

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
                                        <div className={POPCSS.LeftTop}>
                                            <h3>Add to cart</h3>
                                            <Plus></Plus>
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
export default Android
