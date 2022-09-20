import './App.css';
import 'bulma/css/bulma.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar.component';
import Home from './routes/home.component';
import Informes from './routes/informes.component';
import Proyectos from './routes/proyectos.component';
import Instancias from './routes/instancias.component';
import Secciones from './routes/secciones.components';
import Backlog from './routes/backlogs.components';
import Usuarios from './routes/usuarios.components';

const App = () =>{


    return(
        <>
            <Routes >
                <Route  path='/' element={<NavBar />}>
                    <Route  index element={<Home />}/>
                    <Route  path='/informes' element={<Informes />}/>
                    <Route  path='/proyectos' element={<Proyectos />}/>
                    <Route  path='/instancias' element={<Instancias />}/>
                    <Route  path='/secciones' element={<Secciones />}/>
                    <Route  path='/backlogs' element={<Backlog />}/>
                    <Route  path='/usuarios' element={<Usuarios />}/>
                </Route>
            </Routes>
        </>
    )
}

export default App;
