import Tabla from '../../components/tabla/tabla.component';
import { useState, useEffect } from 'react';
import CardList from '../../components/card-list/card-list.component';
import { useInformes } from './useInformes';

const Informes=()=>{
    //const [informes, setInformes] = useState([]);
    //const [cards, setCards] = useState([]);
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

   // useEffect(()=>{
   //     fetch('https://codemia-proyectos-production.up.railway.app/informeUsuarioProyecto')
   //         .then(res=> res.json())
   //         .then(proy=>setInformes(proy))
   //     fetch('https://codemia-proyectos-production.up.railway.app/getBacklog/1')
   //         .then(res=>res.json())
   //         .then(backlogs=>setCards(backlogs))
   // },[]);
        const informes = useInformes()
        const cards = []
    return(
        <div className={'container'}>
            <div className='columns'>
                <div className='column'>
                    <CardList titulo={'To Do'} color={'is-link'} cartas={cards}/>
                </div>
                <div className='column'>
                    <CardList titulo={'Doing'} color={'is-info'}/>
                </div>
                <div className='column'>
                    <CardList titulo={'Review'} color={'is-success'}/>
                </div>
            </div>

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
