//import { useState, useEffect } from 'react';
import Tabla from '../../components/tabla/tabla.component';
import { useUsuarios } from './useUsuarios';

const Usuarios = ()=>{
    //const [usuarios, setUsuarios] = useState([]);
    const usuariosHeaders = [
        {
            key:'id',
            titulo:'ID'
        },
        {
            key:'nick',
            titulo:'Nick'
        },
        {
            key:'email',
            titulo:'Email'
        },
        {
            key:'nombre',
            titulo:'Nombre'
        },
        {
            key:'apellido',
            titulo:'Apellido'
        },
        {
            key:'idUsuarioTrello',
            titulo:'ID Usuario Trello'
        },
        {
            key:'tel',
            titulo:'Tel'
        },
        {
            key:'ciudad',
            titulo:'Ciudad'
        },
        {
            key:'password',
            titulo:'Password'
        },
    ]
    //useEffect(()=>{
    //    fetch('https://codemia-proyectos-production.up.railway.app/usuarios')
    //        .then(res=> res.json())
    //        .then(users=>setUsuarios(users))

    //},[]);
    const usuarios = useUsuarios();
    return (
        <div className={'container'}>

            <section className='section'>
            <h1 className='title'>Usuarios</h1>
            <br />
            <label>sarasa</label>
            <section className='section'>
            <Tabla data={usuarios} headers={usuariosHeaders} />
            </section>
            </section>
        </div>
    )
}

export default Usuarios;
