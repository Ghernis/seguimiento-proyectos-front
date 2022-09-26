import Tabla from '../../components/tabla/tabla.component';
import { useState, useEffect } from 'react';
import CardList from '../../components/card-list/card-list.component';
import { useInstancias } from '../instancias/useInstancias';
import { useInformes } from './useInformes';
import { useTrelloDoing, useTrelloTodo, useTrelloReview } from './useTrello';
import Formulario from '../../components/formulario/formulario.component';
import {toast} from 'react-hot-toast';

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

    const [selectInforme,setSelectInforme] = useState(2);
    const [isNext,setIsNext] = useState(true);
    const [isPrev,setIsPrev] = useState(true);
    const informes = useInformes();
    const instancias = useInstancias();
    const doing = useTrelloDoing(selectInforme);
    const todo = useTrelloTodo(selectInforme);
    const review = useTrelloReview(selectInforme);


    return(
        <div className={'container'}>
            <div className='section'>
                <div className='tile'>
                    <h1 className='title'>Informe Semanal de </h1>
                    <div className="select is-link" key='first'>
                        <select onChange={e=>setSelectInforme(parseInt(e.target.value))} value={selectInforme}>
                            {
                            instancias.map((inf)=>{
                                return <option key={inf.id} value={inf.id}>{inf.titulo}</option>
                            })
                        }
                        </select>
                    </div>
                </div>
                <br />
                <p className='subtitle'>{
                    instancias.length!=0 && instancias[instancias.findIndex(ins=>{
                        return ins.id==selectInforme
                    })].descripcion
                }</p>
            </div>
            <section className='section'>
                <h1 className='title'>Estado de tablero Trello</h1>
                <div className='columns'>
                    <div className='column'>
                        <CardList titulo={'To Do'} color={'is-link'} cartas={todo}/>
                    </div>
                    <div className='column'>
                        <CardList titulo={'Doing'} color={'is-info'} cartas={doing}/>
                    </div>
                    <div className='column'>
                        <CardList titulo={'Review'} color={'is-success'} cartas={review}/>
                    </div>
                </div>
            </section>

            <section className='section'>
                <section className='section'>
                    <Formulario registros={informes.filter(i=>{
                        return i.idProyecto==selectInforme
                    })} />

                    <div className='section'>
                        <div className='level'>
                            <div className='level-item'><button className='button is-info is-light' disabled={!isPrev} onClick={()=>moveProyecto(-1)}>Prev</button></div>
                            <div className='level-item'><button className='button is-success is-light' onClick={()=>{toast.success('No va a pasar nada amiwi')}}>Nueva entrada</button></div>
                            <div className='level-item'><button className='button is-info is-light' disabled={!isNext} onClick={()=>moveProyecto(1)}>Next</button></div>
                        </div>
                    </div>


                </section>
            </section>
        </div>
    )
    function moveProyecto(val){
        const si = parseInt(selectInforme);
        const inx = instancias.findIndex(o=>{
            return o.id == si
        })
        const newI=inx+val
        if(newI<instancias.length && newI>=0){
            setSelectInforme(instancias[newI].id)
        }
        if(newI+1==instancias.lenght){
            setIsNext(false)
        }else{
            setIsNext(true)
        }
        if(newI==0){
            setIsPrev(false)
        }else{
            setIsPrev(true)

        }
    }
}


export default Informes;
