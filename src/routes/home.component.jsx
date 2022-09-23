const Home=()=>{
    return (
        <>

            <section className="hero is-large is-info">
                <div className="hero-body">
                    <p className="title">
                        Home del SeguiProye
                    </p>
                    <p className="subtitle">
                        Sarasa
                    </p>
                </div>
            </section>
            <br />
            <div className='container'>
                <article className="message is-link">
                    <div className="message-header">
                        <p>Sarasa para probar bulma</p>
                        <button className="delete" aria-label="delete"></button>
                    </div>
                    <div className="message-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                    </div>
                </article>
            </div>
            </>
    )
}

export default Home;
