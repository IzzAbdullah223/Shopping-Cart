import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import LeftColumn from './Pages/Quick Navigation/LeftColumn/LeftColumn'
import Pop2024 from './Pages/Quick Navigation/Popular in 2024/Pop2024'
import AllTime from './Pages/Quick Navigation/All time top/AllTime'
import BestOfTheYear from './Pages/Quick Navigation/BestOfTheYear/BestOfTheYear'
import PC from './Pages/Quick Navigation/PC/PC'
import PlayDice from './Pages/Quick Navigation/PlayDice/PlayDice'
 
 

 
 
 

createRoot(document.getElementById('root')!).render(
  //<StrictMode>
  <> 
  <Header></Header>
  <PC></PC>
  </>
    
 // </StrictMode>,
)
