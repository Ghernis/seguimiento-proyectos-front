import { QueryClient, QueryCache } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

function queryErrorHandler(error){
    const title = error instanceof Error ? error.message : 'Error de conexion al servidor';
    toast.error(title)
}

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: queryErrorHandler,
    })
});

