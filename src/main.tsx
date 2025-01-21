
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import {ring} from 'ldrs'
import Layout from './Layout'
import HomePage from './Pages/HomePage/HomePage'
import PlayDice from './Pages/Quick Navigation/PlayDice/PlayDice'
import BestOfTheYear from './Pages/Quick Navigation/BestOfTheYear/BestOfTheYear'
import AllTime from './Pages/Quick Navigation/All time top/AllTime'
import Pop2024 from './Pages/Quick Navigation/Popular in 2024/Pop2024'
import PlayStation from './Pages/Quick Navigation/Playstation/Playstation'
import PC from './Pages/Quick Navigation/PC/PC'
import XboxOne from './Pages/Quick Navigation/Xbox One/XboxOne'
import NintendoSwitch from './Pages/Quick Navigation/Nintendo/NintendoSwitch'
import Android from './Pages/Quick Navigation/Android/Android'
import Action from './Pages/Quick Navigation/Genres/Action'
import Strategy from './Pages/Quick Navigation/Genres/Strategy'
import Shooter from './Pages/Quick Navigation/Genres/Shooter'
import Adventure from './Pages/Quick Navigation/Genres/Adventure'
 



const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout></Layout>,
    children:[
      {path:'/', element:<HomePage></HomePage>},
      {path:'PlayDice', element:<PlayDice></PlayDice>},
      {path: "BestOfTheYear", element:<BestOfTheYear></BestOfTheYear>},
      {path: "AllTimeTop", element:<AllTime></AllTime>},
      {path: "PopularIn2024", element:<Pop2024></Pop2024>},
      {path: "PlayStation", element:<PlayStation></PlayStation>},
      {path: "PC", element:<PC></PC>},
      {path: "XboxOne", element:<XboxOne></XboxOne>},
      {path: "Nintendo",element:<NintendoSwitch></NintendoSwitch>},
      {path:"Android",element:<Android></Android>},
      {path:"Action",element:<Action></Action>},
      {path:"Strategy",element:<Strategy></Strategy>},
      {path:"Shooter",element:<Shooter></Shooter>},
      {path:"Adventure",element:<Adventure></Adventure>}
      
    ]
  }
])

ring.register();
 
createRoot(document.getElementById('root')!).render(
  //<StrictMode>
  <> 
   <RouterProvider router={router}></RouterProvider>
  </>
    
 // </StrictMode>,
)
