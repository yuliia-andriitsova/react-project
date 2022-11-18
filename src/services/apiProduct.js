import axios from 'axios';
axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const getProduct = async query => {
  const { data } = await axios.get(`/product?query=${query}`);
  return data;
};

export const addProduct = async body => {
  const { data } = await axios.post('/day', body);
  return data;
};

export const getDayProduct = async () => {
  const { data } = await axios.get('/day');
  return data;
};
export const deleteDayProduct = async body => {
  const { data } = await axios.delete('/day', { data: body });
  return data;
};
