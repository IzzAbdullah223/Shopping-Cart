import POPCSS from '../../Quick Navigation/Popular in 2024/Pop2024.module.css'
import LeftColumn from '../LeftColumn/LeftColumn'
import React, { useState,useEffect,useRef } from 'react'
import { createRoot } from 'react-dom/client'
import Plus from '../../../assets/icons/Plus'
import Windows from '../../../assets/icons/Windows'
import Playstation from '../../../assets/icons/Playstation'
import Xbox from '../../../assets/icons/Xbox'
import Nintendo from '../../../assets/icons/Nintendo'
import IOS from '../../../assets/icons/iOS'


 

function Pop2024(){
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
        GamesData:Results[]
    }

    interface Platforms{
        platform:Platform
    }

    const [Loading,setLoading] = useState(true)

    const [data,setData] = useState<GamesDetails | null>(null)

    const[Platforms,setPlatforms] = useState<JSX.Element[] | null>(null)


    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(`https://api.rawg.io/api/games?key=${Apikey}&dates=2024-01-01,2024-12-31`)
            const result = await response.json()


            const FormattedData:GamesDetails={
                GamesData:result.results
            }

            setData(FormattedData)
            
        }
        fetchData()
         
        
    },[])

    
    function displayGames(){
       // setLoading(L=>L=false)
       
      }
     

      useEffect(()=>{   
        if(data!=null){
              displayGames()
            //setLoading(L=>L=false)
           }    
      },[data])


    return(
        <div className={POPCSS.PageContainer}>
            <LeftColumn></LeftColumn>
            <div className={POPCSS.RightSide}>
                {Loading? (
                    <div className={POPCSS.LoadingContainer}>

                    </div>
                     
                ):(
                    <div className={POPCSS.RightSideContainer}>
                    <h1>Popular in 2024</h1>
                    <div className={POPCSS.GameCardsContainer}>
                        {data?.GamesData.map((game,index)=>(
                            <div className={POPCSS.GameCard}>
                                <div className={POPCSS.Top}>
                                    <img src={game.background_image as string}></img>
                                </div>
                                <div className={POPCSS.Below}>
                                    <h3>Add to cart</h3>
                                    <Plus></Plus>
                                </div>
                                <div className={POPCSS.Platforms}>

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

export default Pop2024