
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'

import Layout from './Layout'
import HomePage from './Pages/HomePage/HomePage'
import PlayDice from './Pages/Quick Navigation/PlayDice/PlayDice'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout></Layout>,
    children:[
      {path:'/', element:<HomePage></HomePage>},
      {path:'/', element:<PlayDice></PlayDice>}
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
