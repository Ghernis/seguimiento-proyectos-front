import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../react-query/queryKeys';


import { axiosInstance } from '../../react-query/axiosInstance';

async function getUsuarios(){
    const { data } = await axiosInstance.get('/usuarios');
    return data;
}

export function useUsuarios(){
    const fallBack = [];
    const { data = fallBack } = useQuery([queryKeys.usuarios],getUsuarios,{
        onError:(error)=>{
            const title = error instanceof Error ? error.message : 'Error raro';

        }
    })
    return data;
}

