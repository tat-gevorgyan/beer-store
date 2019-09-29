import axios from 'axios';

import { HOST } from 'configs/host';

export const Api = axios.create({
  baseURL: `${HOST.API.URL}/${HOST.API.API_PREFIX}`,
  headers: { common: {} },
});

export const BasicApi = axios.create({
  baseURL: `${HOST.API.URL}/${HOST.API.API_PREFIX}`
});
