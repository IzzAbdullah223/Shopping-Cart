import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ring } from 'ldrs';
import Layout from './Layout';
import HomePage from './Pages/HomePage/HomePage';
import PlayDice from './Pages/Quick Navigation/PlayDice/PlayDice';
import BestOfTheYear from './Pages/Quick Navigation/Top/BestOfTheYear';
import AllTime from './Pages/Quick Navigation/Top/AllTime';
import Pop2024 from './Pages/Quick Navigation/Top/Pop2024';
import PlayStation from './Pages/Quick Navigation/Platforms/Playstation';
import PC from './Pages/Quick Navigation/Platforms/PC';
import XboxOne from './Pages/Quick Navigation/Platforms/XboxOne';
import NintendoSwitch from './Pages/Quick Navigation/Platforms/NintendoSwitch';
import Android from './Pages/Quick Navigation/Platforms/Android';
import IOS from './Pages/Quick Navigation/Platforms/IOS';
import Action from './Pages/Quick Navigation/Genres/Action';
import Strategy from './Pages/Quick Navigation/Genres/Strategy';
import Shooter from './Pages/Quick Navigation/Genres/Shooter';
import Adventure from './Pages/Quick Navigation/Genres/Adventure';
import Puzzle from './Pages/Quick Navigation/Genres/Puzzle';
import Racing from './Pages/Quick Navigation/Genres/Racing';
import Sports from './Pages/Quick Navigation/Genres/Sports';
import Last30Days from './Pages/Quick Navigation/NewReleases/Last30Days';
import RPG from './Pages/Quick Navigation/Genres/RPG';


export interface Platform{
  name:string
}
export interface Results{
 name:String,
 background_image:string,
 parent_platforms:Platforms[],
 id:number
}

export interface PlayDiceGame{
  name:String,
  background_image:string,
  number:number
}
export interface GamesDetails{
 GamesData:Results[],

}

export interface ModalGames{
    Game:Results,
    gameIndex:number
}
export interface GamesDetailsWithSelect{
  PopularData:Results[],
  RatingData:Results[],
  ReleaseData:Results[]
 }

export interface Platforms{
 platform:Platform
}

 

export interface gamesStates{
  gameIndexes: boolean[]  
  gameNames:  String[]   
}


 


function App() {

  const [gamesStates, setGamesStates] = useState<gamesStates[]>(
    Array.from({ length: 46 }, () => ({ gameIndexes: [], gameNames: [] }))
  );
   
  useEffect(() => {
    setGamesStates(prevGamesStates => 
      prevGamesStates.map((gameState, index) => 
        index === 2  
          ? {
              ...gameState,
              gameIndexes: Array(40).fill(false),
              gameNames: Array(40).fill("")
            }
          : {
              ...gameState,
              gameIndexes: Array(20).fill(false),  
              gameNames: Array(20).fill("")
            }
      )
    );
  }, []);  


  const [numberOfGames, setNumberOfGames] = useState<number>(0);
  const [ModalGames,setModalGames] = useState<ModalGames[]>([])
  const [gameStateIndex,setGameStateIndex] = useState(3)
  const [PlayDiceGames,setPlayDiceGames] = useState<PlayDiceGame[]>([])
 
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout    gamesStates={gamesStates}     numberOfGames={numberOfGames} setNumberOfGames={setNumberOfGames} gameStateIndex={gameStateIndex}
                          ModalGames={ModalGames}       setModalGames={setModalGames}  setGamesStates={setGamesStates}    setGameStateIndex={setGameStateIndex}
                          PlayDiceGames={PlayDiceGames} setPlayDiceGames={setPlayDiceGames}
                          
                        
 />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: 'PlayDice', element: <PlayDice /> },
        { path: 'PlayDice/:gameID', element: <PlayDice /> },
        { path: 'BestOfTheYear', element: <BestOfTheYear /> },
        { path: 'AllTimeTop', element: <AllTime /> },
        { path: 'PopularIn2024', element: <Pop2024 /> },
        { path: 'Last30Days', element: <Last30Days /> },
        { path: 'PlayStation', element: <PlayStation /> },
        { path: 'PC', element: <PC /> },
        { path: 'XboxOne', element: <XboxOne /> },
        { path: 'Nintendo', element: <NintendoSwitch /> },
        {path: 'iOS', element: <IOS></IOS>},
        { path: 'Android', element: <Android /> },
        { path: 'Action', element: <Action /> },
        { path: 'Strategy', element: <Strategy /> },
        {path: "Rpg", element: <RPG></RPG>},
        { path: 'Shooter', element: <Shooter /> },
        { path: 'Adventure', element: <Adventure /> },
        { path: 'Puzzle', element: <Puzzle /> },
        { path: 'Racing', element: <Racing /> },
        { path: 'Sports', element: <Sports /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

ring.register();

createRoot(document.getElementById('root')!).render(<App />);