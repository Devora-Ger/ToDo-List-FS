import axios from 'axios';
import configData from './config.json';

export const api = axios.create({
    baseURL: configData.serverURL
});
