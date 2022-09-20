import { useState, useEffect } from 'react';
import Tabla from '../components/tabla/tabla.component';

const Secciones=()=>{
    const [secciones,setSecciones] = useState([]);
    const seccionesHeaders = [
        {
            key:'id',
            titulo:'ID'
        },
        {
            key:'seccion',
            titulo:'Seccion'
        },
        {
            key:'descripcion',
            titulo:'Descripcion'
        },
    ]
    useEffect(()=>{
        fetch('https://codemia-proyectos-production.up.railway.app/secciones')
            .then(res=> res.json())
            .then(secciones=>setSecciones(secciones))
    },[]);
    return (
        <div className={'container'}>

            <section className='section'>
            <h1 className='title'>Secciones</h1>
            <br />
            <label>sarasa</label>
            <section className='section'>
            <Tabla data={secciones} headers={seccionesHeaders} />
            </section>
            </section>
        </div>
    )
}

export default Secciones;
