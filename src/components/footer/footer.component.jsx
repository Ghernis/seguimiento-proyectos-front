import {Component} from 'react';
import logo from '../../assets/Gherni-color-trim.svg';

class Footer extends Component{
    constructor(){
        super()

    }
render(){
        return(

    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Seguimiento de Proyectos</strong> by Gherni.
        </p>
          <img src={logo} width="100" />
      </div>
    </footer>
        )
    }
}

export default Footer;
