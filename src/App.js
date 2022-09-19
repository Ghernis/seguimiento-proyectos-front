import './App.css';
import 'bulma/css/bulma.min.css';
import {Component} from 'react';
import Tabla from './components/tabla/tabla.component';
import Footer from './components/footer/footer.component';

class App extends Component{
    constructor(){
        super();
        this.state={
            informes:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/informeUsuarioProyecto')
        .then(res=> res.json())
        .then(proy=>this.setState(()=>{
                return {informes: proy}
        }))
    }

    render(){
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
      return (
        <div className="App">
                <div className={'container'}>
                    <section className='section'>
                    <h1 className='title'>Informes Semanales</h1>
                    <br />
                    <label>Esta informacion es fetcheada de mi base de datos con mi API</label>
                    <section className='section'>
                    <Tabla data={this.state.informes} headers={informesHeaders} />
                    </section>
                    </section>
                </div>

                <Footer />
        </div>
      );
    }
}

export default App;
