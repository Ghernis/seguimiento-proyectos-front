
const CardList=(props)=>{
    const {titulo,color,cards} = props;
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

    cards !=undefined && cards.map(c=>{
  <a className="panel-block is-active">
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
