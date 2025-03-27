import { useEffect,useState} from 'react'
import PLAYCSS from '../PlayDice/PlayDice.module.css'
import LeftArrow from '../../../assets/icons/LeftArrow'
import ChevronLeft from '../../../assets/icons/ChevronLeft'
import ChevronRight from '../../../assets/icons/ChevronRight'
import ChevronDown from '../../../assets/icons/ChevronDown'


function PlayDice(){

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
    const[gameImages,setgameImages]=useState<string[]>([])    
    const Apikey = "2bcc24482f844476a6b3935319801e0c"
    const [ImageIndex,setImageIndex] = useState(0)
    const [Loading,seLoading] = useState(false)

    useEffect(()=>{
        const   fetchData= async()=>{

        
            const response = await fetch(`https://api.rawg.io/api/games/981791?key=${Apikey}`)
            const result = await response.json()

            const response1 = await fetch(`https://api.rawg.io/api/games/981791/screenshots?key=${Apikey}`)
            const result1 = await response1.json()
           setgameImages(g=>[...g,result.background_image])
           for(let i=0;i<6;i++){
           setgameImages(g=>[...g,result1.results[i].image])
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

  
 
  
    function LeftChevron(){

        setImageIndex(prevIndex=>{
            const newIndex= prevIndex===0 ? 6:prevIndex-1

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
            const newIndex = prevIndex === 6 ? 0 : prevIndex + 1;
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


    if(Loading){
    return(
    <div style={PLAYCSS}>
        <div className={PLAYCSS.Top}>
           <div className={PLAYCSS.TopLeft}>
               <LeftArrow></LeftArrow>
               <h2>Harbor</h2>
           </div>
           <div className={PLAYCSS.TopRight}>
               <h1>{data?.GameTitle}</h1>
           </div>
        </div>
        <div className={PLAYCSS.Below}>
            <div className={PLAYCSS.BelowLeft}>
                <div className={PLAYCSS.ImageContainer}>
                    <ChevronLeft onClick={LeftChevron}></ChevronLeft>
                    <img src={gameImages[ImageIndex]}></img>
                    <ChevronRight onClick={RightChevron}></ChevronRight>
                    <div className={PLAYCSS.DotsContainer}>
                        <div className={`${PLAYCSS.Dot} ${PLAYCSS.ActiveDot}`}></div>
                        <div className={PLAYCSS.Dot}></div>
                        <div className={PLAYCSS.Dot}></div>
                        <div className={PLAYCSS.Dot}></div>
                        <div className={PLAYCSS.Dot}></div>
                        <div className={PLAYCSS.Dot}></div>
                        <div className={PLAYCSS.Dot}></div>
                    </div>
                </div>
            </div>
            <div className={PLAYCSS.BelowRight}>
                <div className={PLAYCSS.GameDescriptionContainer}>
                    <h2>Description</h2>
                    <p>{data?.GameDesc}</p>
                </div>
                <div className={PLAYCSS.MoreContainer}>
                        <div className={PLAYCSS.MoreTop}> 
                          <a>{data?.Website}</a>  
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
                <div className={PLAYCSS.AddToCartContainer}>
                    <h3>$12.98</h3>
                    <h2>Add to cart +</h2>
                </div>
            </div>
        </div>
   </div>
        
    )
}

}

export default PlayDice