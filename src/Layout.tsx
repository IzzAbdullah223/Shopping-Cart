import {Outlet} from 'react-router-dom'
import Header from './Header/Header'
import LayoutCSS from './Layout.module.css'

function Layout(){
    return(
        <div className={LayoutCSS.PageContainer}>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout