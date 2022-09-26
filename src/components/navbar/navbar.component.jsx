import logo from '../../assets/Gherni-color-trim.svg';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../footer/footer.component';
import Loading from '../loader/loader';


const  NavBar=()=>{

    return(
        <>
            <nav className="navbar is-dark has-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="">
                        <img src={logo} height="28" />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to='/'>
                            Home
                        </Link>

                        <Link className="navbar-item" to='/informes'>
                            Informes(ultra secreto)
                        </Link>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link className="navbar-link" to='/proyectos'>
                                Proyectos
                            </Link>

                            <div className="navbar-dropdown">
                                <Link className="navbar-item" to='instancias'>
                                    Instancias de Proyectos
                                </Link>
                                <Link className="navbar-item" to='secciones'>
                                    Secciones
                                </Link>
                                <Link className="navbar-item" to='backlogs'>
                                    Backlogs
                                </Link>
                                <hr className="navbar-divider" />
                                <Link className="navbar-item" to='usuarios'>
                                    Usuarios
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>

            <Loading />
            <Outlet />
            <Footer />
            </>
    )
}


export default NavBar;
