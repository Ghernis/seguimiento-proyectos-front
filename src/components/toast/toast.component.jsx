import './toast.styles.css';

const Toast=(props)=>{
    const {color, titulo,mensaje,show=false} = props
    return (
        <>
            {show ?
        <article className={'message ' + color}>
                    <div className='message-header'>
                <p>{titulo}</p>
                <button className='delete' aria-label='delete'></button>
                </div>
                    <div className='message-body'>
                <p> {mensaje}</p>
                </div>

            </article> : <></>}
            </>
    )

}

export default Toast;

