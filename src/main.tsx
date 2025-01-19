
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'

import Layout from './Layout'
import HomePage from './Pages/HomePage/HomePage'
import PlayDice from './Pages/Quick Navigation/PlayDice/PlayDice'
import BestOfTheYear from './Pages/Quick Navigation/BestOfTheYear/BestOfTheYear'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout></Layout>,
    children:[
      {path:'/', element:<HomePage></HomePage>},
      {path:'PlayDice', element:<PlayDice></PlayDice>},
      {path: "BestOfTheYear", element:<BestOfTheYear></BestOfTheYear>}
    ]
  }
])
 
createRoot(document.getElementById('root')!).render(
  //<StrictMode>
  <> 
   <RouterProvider router={router}></RouterProvider>
  </>
    
 // </StrictMode>,
)
