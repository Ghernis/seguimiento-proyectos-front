import { useQuery,useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '../../react-query/axiosInstance';
import { queryKeys } from '../../react-query/queryKeys';


async function getInstancias(){
    const { data } = await axiosInstance.get('/instanciasProyectos')
    const dataN = data.map(i=>{
        return {...i,tipoProyecto:i.proyecto.titulo}
    })
    return dataN;
}

export function useInstancias(){
    const fallback = [];
    const { data = fallback } = useQuery([queryKeys.instancias],getInstancias)
    return data
}

export function usePrefetchInstancias(){
    const queryClient = useQueryClient();
    queryClient.prefetchQuery([queryKeys.instancias],getInstancias)

}
