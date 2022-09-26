
const CardList=(props)=>{
    const {titulo,color,cartas:cards} = props;
    //const cards=useTrelloBacklog();

    //if(cards.length==0) return <div>no cards</div>
    return(
        <>
            <nav className={"panel "+color}>
                <p className="panel-heading">
                    {titulo}
                </p>
                <div className="panel-block">
                    <label className='label'>Cartas</label>
                </div>
                {
                (cards.lenght!=0) &&
                    cards.map(c=>{
                       return <a key={c.id} className="panel-block is-active" href={c.shortUrl}>
                            <span className="panel-icon">
                                <i className="fas fa-book" aria-hidden="true"></i>
                            </span>
                            {c.name}
                        </a>
                    })

            }
            </nav>

            </>
    )
}

export default CardList;
