const Formulario=(props)=>{
    const {registros} = props;
    return (
        <div className='container'>
            {
            registros.map(r=>{
                return (
                    <div key={r.id} className='black'>
                        <div className='columns'>
                            <div className='column'>
                                <div className='box'>
                                    <div className='block'>
                                        <div className='columns'>
                                            <div className='column is-one-fifth'>
                                                <span className='tag is-info'>Gherni</span>
                                            </div>
                                            <div className='column is-one-fifth'>
                                                <span className='tag is-warning'>{formatDate(r.fecha)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <label className='label'>Comentario:</label>
                                        <p>{r.comentario}</p>
                                        <label className='label'>Sugerencia:</label>
                                        <p>{r.sugerencia}</p>

                                        {r.recursoSugerencia!='' &&
                                            <>   <label className='label'>Recurso de estudio:</label>
                                                <ul>{r.recursoSugerencia.split(';').map(link=>{
                                                    return <li key={link}><a href={link}>{link}</a></li>
                                                })}
                                                </ul>


                                                </>
                                    }
                                    </div>

                                </div>

                            </div>
                            <div className='column'>
                                <div className='box'>
                                    <div className='block'>
                                        <div className='level'>
                                            <span className='tag is-link level-left'>Jorjon</span>
                                            {
                                            (r.isApproved) && <button className='button level-right is-danger'>Unpublish</button>
                                                || <button className='button level-right is-primary'>Publish</button>

                                        }
                                        </div>
                                        <div className='block'>

                                            <label className='label'>Comentario devolucion:</label>
                                            <textarea
                                            className='textarea is-info'
                                            disabled={r.isApproved}
                                            placeholder='Comentario'
                                            defaultValue={r.comentarioRevisor}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}


function formatDate(fecha){
    const f = new Date(fecha);
    return (f.getDay()+'/'+f.getMonth()+'/'+f.getFullYear())

}

export default Formulario;
