import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../react-query/axiosInstance';
import { queryKeys } from '../../react-query/queryKeys';


async function getTrelloDoing(id){
    const { data } = await axiosInstance.get(`/getDoing/${id}`);
    return data;
}

export function useTrelloDoing(id){
    const fallback = [];
    const { data = fallback} = useQuery([queryKeys.doingTrello,id],()=>getTrelloDoing(id));

    return data

}
async function getTrelloTodo(id){
    const { data } = await axiosInstance.get(`/getTodo/${id}`);
    return data;
}

export function useTrelloTodo(id){
    const fallback = [];
    const { data = fallback} = useQuery([queryKeys.todoTrello,id],()=>getTrelloTodo(id));

    return data

}
async function getTrelloReview(id){
    const { data } = await axiosInstance.get(`/getReview/${id}`);
    return data;
}

export function useTrelloReview(id){
    const fallback = [];
    const { data = fallback} = useQuery([queryKeys.reviewTrello,id],()=>getTrelloReview(id));

    return data

}
