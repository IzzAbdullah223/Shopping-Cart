
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'

import Layout from './Layout'
import HomePage from './Pages/HomePage/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout></Layout>,
    children:[
      {path:'/', element:<HomePage></HomePage>}
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
