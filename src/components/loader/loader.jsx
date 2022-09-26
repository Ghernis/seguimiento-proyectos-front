import  CircleLoader from 'react-spinners/CircleLoader';
import { useIsFetching } from '@tanstack/react-query';

const Loading=()=>{
    const isFetching = useIsFetching();
    const display = isFetching>0 ? true : false;
    const override={
        zIndex:'9999',
        position:'fixed',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
    }
    return (
    <CircleLoader
            color={'#36d7b7'}
            loading={display}
            cssOverride={override}
    />

    )
}

export default Loading;
