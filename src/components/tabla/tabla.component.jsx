import { Component } from 'react';
import 'bulma/css/bulma.min.css';
class Tabla extends Component{
    constructor(){
        super()
    }
    render(){
        const {data,headers}=this.props
        return (
            <>
                <table className='table is-bordered'>
                    <thead>
                    <tr>
                    {
                    headers.map(h=>{
                        return <th key={h.key}><abbr title={h.key}>{h.titulo}</abbr></th>
                    })
                    }
                    </tr>
                    </thead>
                    <tbody>
                {
                    data.map(p=>{
                            return <tr key={p.id}>
                            {
                                headers.map(he=>{
                                    return <th key={he.key+p.id}><abbr title='he.key'>{p[he.key]}</abbr></th>
                                })
                            }

                            </tr>
                    })
                }
                </tbody>
                </table>

            </>
        )
    }
}

export default Tabla;
