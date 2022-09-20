import Tabla from '../components/tabla/tabla.component';
import { useState, useEffect } from 'react';

const Informes=()=>{
    const [informes, setInformes] = useState([]);
    const informesHeaders = [
        {
            key:'idUsuario',
            titulo:'id Usuario'
        },
        {
            key:'idProyecto',
            titulo:'id Instancia Proyecto'
        },
        {
            key:'fecha',
            titulo:'Fecha Informe'
        },
        {
            key:'comentario',
            titulo:'Comentario'
        },
        {
            key:'sugerencia',
            titulo:'Sugerencia'
        },
        {
            key:'recursoSugerencia',
            titulo:'Recurso para estudiar'
        },
        {
            key:'comentarioRevisor',
            titulo:'Comentario Revision(solo Jorjon)'
        },
        {
            key:'isApproved',
            titulo:'Se Publica'
        },
    ]

    useEffect(()=>{
        fetch('https://codemia-proyectos-production.up.railway.app/informeUsuarioProyecto')
            .then(res=> res.json())
            .then(proy=>setInformes(proy))
    },[]);
    return(
        <div className={'container'}>

            <section className='section'>
            <h1 className='title'>Informes Semanales</h1>
            <br />
            <label>Esta informacion es fetcheada de mi base de datos con mi API</label>
            <section className='section'>
            <Tabla data={informes} headers={informesHeaders} />
            </section>
            </section>
        </div>
    )
}

export default Informes;
