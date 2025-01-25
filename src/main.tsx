import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import { ring } from 'ldrs';
import Layout from './Layout';
import HomePage from './Pages/HomePage/HomePage';
import PlayDice from './Pages/Quick Navigation/PlayDice/PlayDice';
import BestOfTheYear from './Pages/Quick Navigation/BestOfTheYear/BestOfTheYear';
import AllTime from './Pages/Quick Navigation/All time top/AllTime';
import Pop2024 from './Pages/Quick Navigation/Popular in 2024/Pop2024';
import PlayStation from './Pages/Quick Navigation/Playstation/Playstation';
import PC from './Pages/Quick Navigation/PC/PC';
import XboxOne from './Pages/Quick Navigation/Xbox One/XboxOne';
import NintendoSwitch from './Pages/Quick Navigation/Nintendo/NintendoSwitch';
import Android from './Pages/Quick Navigation/Android/Android';
import Action from './Pages/Quick Navigation/Genres/Action';
import Strategy from './Pages/Quick Navigation/Genres/Strategy';
import Shooter from './Pages/Quick Navigation/Genres/Shooter';
import Adventure from './Pages/Quick Navigation/Genres/Adventure';
import Puzzle from './Pages/Quick Navigation/Genres/Puzzle';
import Racing from './Pages/Quick Navigation/Genres/Racing';
import Sports from './Pages/Quick Navigation/Genres/Sports';
import Last30Days from './Pages/Quick Navigation/NewReleases/Last30Days';


export interface Platform{
  name:string
}
export interface Results{
 name:String,
 background_image:string,
 parent_platforms:Platforms[]
}
export interface GamesDetails{
 GamesData:Results[]
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
 


function App() {
  const [numberOfGames, setNumberOfGames] = useState<number>(0);
  const [ModalGames,setModalGames] = useState<ModalGames[]>([])

  const [gameAdded,setGameAdded] = useState<boolean[]>(Array(20).fill(false))

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout gameAdded={gameAdded} setGameAdded={setGameAdded} numberOfGames={numberOfGames} setNumberOfGames={setNumberOfGames}
                       ModalGames={ModalGames} setModalGames={setModalGames}
 />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: 'PlayDice', element: <PlayDice /> },
        { path: 'BestOfTheYear', element: <BestOfTheYear /> },
        { path: 'AllTimeTop', element: <AllTime /> },
        { path: 'PopularIn2024', element: <Pop2024 /> },
        { path: 'Last30Days', element: <Last30Days /> },
        { path: 'PlayStation', element: <PlayStation /> },
        { path: 'PC', element: <PC /> },
        { path: 'XboxOne', element: <XboxOne /> },
        { path: 'Nintendo', element: <NintendoSwitch /> },
        { path: 'Android', element: <Android /> },
        { path: 'Action', element: <Action /> },
        { path: 'Strategy', element: <Strategy /> },
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