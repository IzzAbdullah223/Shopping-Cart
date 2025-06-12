import { useEffect,useState} from 'react'
import PLAYCSS from '../PlayDice/PlayDice.module.css'
import LeftArrow from '../../../assets/icons/LeftArrow'
import ChevronLeft from '../../../assets/icons/ChevronLeft'
import ChevronRight from '../../../assets/icons/ChevronRight'
import ChevronDown from '../../../assets/icons/ChevronDown'
import { useOutletContext,useParams,Link } from 'react-router-dom'
 
import {ModalGames,PlayDiceGame} from '../../../main'

function PlayDice(){




       const{setNumberOfGames,ModalGames,setPlayDiceGames,GameAdded,setGameAdded} = useOutletContext<{
            setNumberOfGames: React.Dispatch<React.SetStateAction<number>>;
            setModalGames:    React.Dispatch<React.SetStateAction<ModalGames[]>>;
            ModalGames: ModalGames[]
            setPlayDiceGames: React.Dispatch<React.SetStateAction<PlayDiceGame[]>>
            PlayDiceGames:PlayDiceGame[]
            GameAdded:boolean
            setGameAdded: React.Dispatch<React.SetStateAction<boolean>>
        }>()

 
        const id=useParams().gameID
        
     

     

    

    interface GameInfo{
        GameTitle: string,
        GameDesc: string,
        Website: string,
        Released:string,
        Genres: string,
        Platforms:string,
        Developers:string,
        Publishers:string,
    }

    const[data,setData]=useState<GameInfo|null>(null)
    const [data2,setData2]=useState<PlayDiceGame>()
    const[gameImages,setgameImages]=useState<string[]>([])    
    const Apikey = "2bcc24482f844476a6b3935319801e0c"
    const [ImageIndex,setImageIndex] = useState(0)
    const [Loading,seLoading] = useState(false)
    useEffect(()=>{
        const   fetchData= async()=>{

            let response;
            let result;

            if(id)
                response = await fetch(`https://api.rawg.io/api/games/${id}?key=${Apikey}`)
            else
                response = await fetch(`https://api.rawg.io/api/games/981791?key=${Apikey}`)

            result = await response.json()
            
 
             const FormattedData2:PlayDiceGame={
                name:result.name,
                background_image:result.background_image,
                number:result.id
            }

            setData2(FormattedData2)

             

            let response1;
            let result1;
            if(id)
                response1 =  await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${Apikey}`)
            else
                response1 = await fetch(`https://api.rawg.io/api/games/981791/screenshots?key=${Apikey}`)

            result1 = await response1.json()

 
         

          
          
            
           setgameImages(g=>[...g,result.background_image])
           if(result1.results.length===1){
            //Do nothing
           
           }
 
         else{
           for(let i=0;i<result1.results.length;i++){
           setgameImages(g=>[...g,result1.results[i].image])
           }
        } 
        

 

           const Platforms : string[]=[]
           const Genres: string[]=[]        

           for(let i=0;i<result.parent_platforms.length;i++){
                Platforms.push(result.parent_platforms[i].platform.name)
           }

           for(let i=0;i<result.genres.length;i++){
                Genres.push(result.genres[i].name)
           }

            
     
           const formattedData: GameInfo={
                GameTitle:result.name_original,
                GameDesc:result.description_raw,
                Website:result.website,
                Released:`Released: ${result.released}`,
                Genres:`Genres: ${Genres.join(', ')}`,
                Platforms:`Platforms: ${Platforms.join(', ')}`,
                  Developers:`Developers: ${result.developers[0].name}`,
                Publishers:`Publishers: ${result.publishers[0].name}`,
           }

 
          
            setData(formattedData)
            seLoading(true)
        }
       
        fetchData()

    },[])

   
  
    useEffect(()=>{
        CheckIfGameInCart()
    },[data,ModalGames])

    function CheckIfGameInCart(){
        let found=false
        for(let i=0;i<ModalGames.length;i++){
            if(ModalGames[i].Game.name===data?.GameTitle){
                found=true;
            } 
        }
        setTimeout(()=>{
            setGameAdded(found)
        },0)
    }
    
    function LeftChevron(){
         

        setImageIndex(prevIndex=>{
            const newIndex= prevIndex===0 ? gameImages.length-1:prevIndex-1

            setTimeout(()=>{
                const DotsContainer = document.querySelector<HTMLDivElement>(`.${PLAYCSS.DotsContainer}`);
                if (DotsContainer) {
                    const DotsArray = Array.from(DotsContainer.children);
                    DotsArray.forEach(Dot => Dot.classList.remove(PLAYCSS.ActiveDot, PLAYCSS.ShrinkDot));
             
                    DotsArray[newIndex].classList.add(PLAYCSS.ShrinkDot);
        
                    setTimeout(() => {
                        DotsArray[newIndex].classList.remove(PLAYCSS.ShrinkDot);
                        DotsArray[newIndex].classList.add(PLAYCSS.ActiveDot);
                    }, 100); 
                }
            },0)

            return newIndex
        })
         
    }

    function RightChevron(){
    
 

         setImageIndex(prevIndex => {
            const newIndex = prevIndex === gameImages.length-1 ? 0 : prevIndex + 1;
            setTimeout(() => {
                const DotsContainer = document.querySelector<HTMLDivElement>(`.${PLAYCSS.DotsContainer}`);
                if (DotsContainer) {
                    const DotsArray = Array.from(DotsContainer.children);
        
            
                    DotsArray.forEach(Dot => Dot.classList.remove(PLAYCSS.ActiveDot, PLAYCSS.ShrinkDot));
        
             
                    DotsArray[newIndex].classList.add(PLAYCSS.ShrinkDot);
        
                    setTimeout(() => {
                        // Remove shrink and apply active class
                        DotsArray[newIndex].classList.remove(PLAYCSS.ShrinkDot);
                        DotsArray[newIndex].classList.add(PLAYCSS.ActiveDot);
                    }, 100); // Short delay for effect
                }
            }, 0);
    
            return newIndex;  
        });
    }

    function DisplayMore(){
        const MoreTop = document.querySelector<HTMLDivElement>(`.${PLAYCSS.MoreTop}`)
        
        if(MoreTop){
            MoreTop.style.display= MoreTop.style.display === "flex"? "none": "flex";
    }
        const Chevron = document.querySelector<SVGSVGElement>(`.${PLAYCSS.ChevronDown}`)
        Chevron?.classList.toggle(PLAYCSS.ChevronUp)
}

    function AddGame(){
        if(data2)
        setPlayDiceGames(Prev=>[...Prev,data2])
        setNumberOfGames(G=>G+1)
        setGameAdded(true)
    }


    if(Loading){
    return(
    <div className={PLAYCSS.PageContainer}>
        <div className={PLAYCSS.Top}>
           <Link to="/" className={PLAYCSS.TopLeft}>
               <LeftArrow></LeftArrow>
               <h2>Harbor</h2>
           </Link>
           <div className={PLAYCSS.TopRight}>
               <h1>{data?.GameTitle}</h1>
           </div>
        </div>
        <div className={PLAYCSS.Bottom}>
            
                <div className={PLAYCSS.ImageContainer}>
                    <ChevronLeft onClick={LeftChevron}></ChevronLeft>
                    <img src={gameImages[ImageIndex]}></img>
                     <ChevronRight onClick={RightChevron}></ChevronRight>
                    <div className={PLAYCSS.DotsContainer}>
                        {gameImages.map((_,i)=>{
                            if(i==0)
                                return <div key={i} className={`${PLAYCSS.Dot} ${PLAYCSS.ActiveDot}`}></div>

                                return <div key={i} className={PLAYCSS.Dot}></div>
                        })}
                    </div>
                </div>
           
            <div className={PLAYCSS.BottomRight}>
                <div className={PLAYCSS.GameDescContainer}>
                    <h3>Description</h3>
                    <p>{data?.GameDesc}</p>
                </div>
                <div className={PLAYCSS.MoreContainer}>
                    <div className={PLAYCSS.MoreTop}> 
                        <h3>Website: <a href=''>{data?.Website}</a></h3> 
                        <h3>{data?.Released}</h3>
                        <h3>{data?.Genres}</h3>
                        <h3>{data?.Platforms}</h3>
                        <h3>{data?.Developers}</h3>
                        <h3>{data?.Publishers}</h3>
                    </div>
                    <div className={PLAYCSS.More} onClick={DisplayMore}>
                        <h3>More</h3>
                        <ChevronDown className={PLAYCSS.ChevronDown}></ChevronDown>
                    </div>
                </div>
                <div className={PLAYCSS.AddToCartContainer} onClick={!GameAdded ? AddGame : () => {}}>
                    <h3>$12.98</h3>
                    <h2 style={{color:GameAdded?"#1aada6":"white",cursor:GameAdded?"default":'pointer'}}>{GameAdded? "Added": "  Add to cart +"}</h2>
                </div>  
            </div>
        </div>
 
        </div>
 
        
    )
}

}

export default PlayDice