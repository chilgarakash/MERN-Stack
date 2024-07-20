import Style from './LayoutStyle.module.css'
import GlobalNav from "./GlobalNav";
import { Outlet } from 'react-router-dom';
const Layout =()=>{
    return (
      <>
        <article className={Style.header}>
            <header>Welcome !</header>
        </article>
        <GlobalNav />
        <section className={Style["content-section"]}>
           <main>
            <Outlet />
           </main>
        </section>
      </>
    );
}

export default Layout;
