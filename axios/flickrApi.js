import axios from 'axios';

import { FLICKER_API_BASE_URL, FLICKER_API_KEY } from '../config/app';

const flickrApi = axios.create({
    timeout: 30000,
    responseType: 'json',
    baseURL: FLICKER_API_BASE_URL
});

flickrApi.interceptors.request.use(
    config => {
        const newConfig = {
            ...config,
            params: {
                ...config.params
            }
        };
        newConfig.params['api_key'] = FLICKER_API_KEY;
        newConfig.params['format'] = 'json';
        newConfig.params['nojsoncallback'] = 1;
        return newConfig;
    },
    error => {
        __DEV__ && console.log('flickrApi request error: ', error, error.response);
        return Promise.reject(error);
    },
);

flickrApi.interceptors.response.use(
    response => response,
    error => {
        __DEV__ && console.log('flickrApi response error: ', error, error.response);
        return Promise.reject(error);
    },
);

export default flickrApi;