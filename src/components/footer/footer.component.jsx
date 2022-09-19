import {Component} from 'react';
import 'bulma/css/bulma.min.css';

class Footer extends Component{
    constructor(){
        super()

    }
render(){
        return(

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Seguimiento de Proyectos</strong> by Gherni.
        </p>
      </div>
    </footer>
        )
    }
}

export default Footer;
