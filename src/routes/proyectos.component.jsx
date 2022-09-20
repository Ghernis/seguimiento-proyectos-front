import Tabla from '../components/tabla/tabla.component';
import { useState, useEffect } from 'react';

const Proyectos = ()=>{
    const [proyectos, setProyectos] = useState([]);
    const proyectosHeader = [
        {
            key:'id',
            titulo:'id'
        },
        {
            key:'titulo',
            titulo:'Titulo'
        },
        {
            key:'descripcion',
            titulo:'Descripcion'
        },
    ]
    useEffect(()=>{
        fetch('https://codemia-proyectos-production.up.railway.app/proyectos')
            .then(res=> res.json())
            .then(proy=>setProyectos(proy))
    },[]);
    return (
        <div className={'container'}>

            <section className='section'>
            <h1 className='title'>Template Proyectos</h1>
            <br />
            <section className='section'>
            <Tabla data={proyectos} headers={proyectosHeader} />
            </section>
            </section>
        </div>
    )
}

export default Proyectos
