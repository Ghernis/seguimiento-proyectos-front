import { useState, useEffect } from 'react';
import Tabla from '../../components/tabla/tabla.component';
import {useInstancias} from '../instancias/useInstancias';

const Instancias=()=>{
    //const [instancias, setInstancias] = useState([]);
    const instanciasHeaders = [
        {
            key:'id',
            titulo:'ID'
        },
        {
            key:'idProyecto',
            titulo:'ID Proyecto'
        },
        {
            key:'titulo',
            titulo:'Titulo'
        },
        {
            key:'descripcion',
            titulo:'Descripcion'
        },
        {
            key:'url_trello',
            titulo:'ID URL Board'
        },
        {
            key:'id_review_list',
            titulo:'ID lista review'
        },
        {
            key:'id_doing_list',
            titulo:'ID lista daing'
        },
        {
            key:'id_todo_list',
            titulo:'ID lista todo'
        },
        {
            key:'id_backlog_list',
            titulo:'ID lista backlog'
        },
        {
            key:'id_done_list',
            titulo:'ID lista done'
        },
        {
            key:'tipoProyecto',
            titulo:'Tipo Proyecto'
        },
        {
            key:'estado',
            titulo:'Estado'
        },
    ]
    //useEffect(()=>{
    //    fetch('https://codemia-proyectos-production.up.railway.app/instanciasProyectos')
    //        .then(res=> res.json())
    //        .then(inst=>inst.map(i=>{
    //            return {...i,tipoProyecto:i.proyecto.titulo}
    //        }))
    //        .then(proy=>setInstancias(proy))
    //},[]);
    const instancias = useInstancias()
    return (
        <div className={'container'}>

            <section className='section'>
            <h1 className='title'>Instancias de Proyectos</h1>
            <br />
            <label>sarasa</label>
            <section className='section'>
            <Tabla data={instancias} headers={instanciasHeaders} />
            </section>
            </section>
        </div>
    )
}

export default Instancias;
