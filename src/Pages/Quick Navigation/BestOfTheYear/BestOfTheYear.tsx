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


 

function BestOfTheYear(){
    const Apikey = "2bcc24482f844476a6b3935319801e0c"

    const [Loading,setLoading] = useState(true)
    const [data,setData] = useState<any>(null)
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(`https://api.rawg.io/api/games?key=${Apikey}&dates=2025-01-01,2025-12-31&ordering=-added`)
            const result = await response.json()
            setData(result)    
        }
        fetchData()
         
        
    },[])

    
    function displayGames(){
        console.log(data)
        const gameImage = document.querySelectorAll<HTMLImageElement>(`.${POPCSS.GameCard} img`)
        const gameName = document.querySelectorAll<HTMLHeadingElement>(`.${POPCSS.GameCard} h2`)
        const gamePlatforms = document.querySelectorAll<HTMLDivElement>(`.${POPCSS.Platforms}`)


        gameImage.forEach((gameCardImage,index)=>{
            gameCardImage.src=data.results[index].background_image
            gameName[index].textContent=data.results[index].name
          
            const Platforms:JSX.Element[]=[]

            for(let i=0;i<data.results[index].platforms.length;i++){


                if(data.results[index].platforms[i].platform.name === "PC")
                    Platforms.push(<Windows key={i}></Windows>)

                if(data.results[index].platforms[i].platform.name === "PlayStation 5")
                     
                    Platforms.push(<Playstation key={i}></Playstation>)

                if(data.results[index].platforms[i].platform.name === "Xbox Series S/X")
           
                    Platforms.push(<Xbox key={i}></Xbox>)

                if(data.results[index].platforms[i].platform.name === "Nintendo Switch")
           
                    Platforms.push(<Nintendo key={i}></Nintendo>)


                if(data.results[index].platforms[i].platform.name === "macOS")
           
                    Platforms.push(<IOS key={i}></IOS>)
            }
     
            const root = createRoot(gamePlatforms[index])

            root.render(<>{Platforms}</>) 
        })

        setLoading(L=>L=false)
      }
     

      useEffect(()=>{  //It is wrapped in useffect because root.render() otherwise an error will occur 
        if(data!=null){
            displayGames()
           }    
      })


    return(

        <div className={POPCSS.PageContainer}>
            <LeftColumn></LeftColumn>
            <div className="RightSide">
                {Loading? (
                    <h1>Loading</h1>
                ):(
                    <div className={POPCSS.RightSideContainer}>
                    <h1>Best of the year</h1>
                    <div className={POPCSS.GameCardsContainer}>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                       
                                    </div>
                                    <h2>Satisfactory</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                  
                                    </div>
                                    <h2>V Rising</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div  className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                       
                                    </div>
                                    <h2>S.T.A.L.K.E.R. 2: Heart of Chornobyl</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
    
                        <div  className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                       
                                    </div>
                                    <h2>V Rising</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                       
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                        
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                        
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                        
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                        
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                        
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                       
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                        
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                        
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                        
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                    
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                        
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                        
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                        
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                        
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
    
                        <div className={POPCSS.GameCard}>
                            <div className={POPCSS.Top}>
                                <img></img>
                            </div>
                            <div className={POPCSS.Below}>
                                <div className={POPCSS.Left}>
                                    <div className={POPCSS.LeftTop}> 
                                        <h3>Add to cart</h3>
                                        <Plus></Plus>
                                    </div>
                                    <div className={POPCSS.Platforms}> 
                                        
                                    </div>
                                    <h2>Hollow Knight: Silksong</h2>
                                </div>
                                <div className={POPCSS.Right}>
                                    <h3>$12.98</h3>
                                </div>
                                
                            </div>  
                        </div>
                    </div>
                    </div>
                )}
                
 
            </div>
            
        </div>
    )

}

export default BestOfTheYear