import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../react-query/axiosInstance';
import { queryKeys } from '../../react-query/queryKeys';


async function getInformes(){
    const { data } = await axiosInstance.get('/informeUsuarioProyecto');
    return data;
}

export function useInformes(){
    const fallback = [];
    const { data = fallback } = useQuery([queryKeys.informes],getInformes);

    return data

}
