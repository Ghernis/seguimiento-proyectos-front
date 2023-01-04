import './App.css';
import 'bulma/css/bulma.min.css';

import {Toaster} from 'react-hot-toast'

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './react-query/queryClient';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar.component';
import Home from './routes/home.component';
import Informes from './routes/informes/informes.component';
import Proyectos from './routes/proyectos.component';
import Instancias from './routes/instancias/instancias.component';
import Secciones from './routes/secciones.components';
import Backlog from './routes/backlogs.components';
import Usuarios from './routes/usuarios/usuarios.components';
import Publicados from './routes/publicados/publicados.components';


const App = () =>{



    return(
        <>
            <QueryClientProvider client={queryClient}>
                <Routes >
                    <Route  path='/' element={<NavBar />}>
                        <Route  index element={<Home />}/>
                        <Route  path='/informes' element={<Informes />}/>
                        <Route  path='/proyectos' element={<Proyectos />}/>
                        <Route  path='/instancias' element={<Instancias />}/>
                        <Route  path='/secciones' element={<Secciones />}/>
                        <Route  path='/backlogs' element={<Backlog />}/>
                        <Route  path='/usuarios' element={<Usuarios />}/>
                        <Route  path='/publicados' element={<Publicados />}/>
                    </Route>
                </Routes>
                <Toaster
                    position='bottom-center'
                />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </>
    )
}

export default App;
