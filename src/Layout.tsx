import {Outlet,useLocation} from 'react-router-dom'
import Header from './Header/Header'
import LayoutCSS from './Layout.module.css'
import PykeVideo from  './assets/Images/pyke.mp4'
import { useEffect, useState } from 'react';

function Layout(){

    const location = useLocation();
    const [isFading,setIsFading] = useState(false);

    useEffect(()=>{
        setIsFading(true);
        const timer = setTimeout(()=>{
            setIsFading(false)
        }, 500)

        return () => clearTimeout(timer);
    },[location.pathname])
    
    
    const  isHomePage= location.pathname==='/'
    return(
        <div className={LayoutCSS.PageContainer}>
            {isHomePage && (
                <video autoPlay loop muted className={LayoutCSS.BackgroundVideo}>
                <source src={PykeVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
      )     }
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout