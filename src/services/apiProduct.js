import axios from 'axios';
axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const getProduct = async search => {
  const { data } = await axios.get('/product', { params: { q: search } });
  console.log('data', data);
  return data;
};

export const addProduct = async product => {
  const { data } = await axios.post('/day', product);
  return data;
};

export const getDayProduct = async () => {
  const { data } = await axios.get('/day');
  return data;
};
export const deleteDayProduct = async id => {
  const { data } = await axios.get(`/day/${id}`);
  return data;
};
