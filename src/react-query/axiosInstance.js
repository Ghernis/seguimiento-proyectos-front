import axios, { AxiosRequestConfig } from 'axios';

import { baseURL } from './constants';

export function getJWTHeader(usuario){
    return { Authorization: `Bearer ${usuario.token}`};
}

const config = {baseURL}
export const axiosInstance = axios.create(config);
