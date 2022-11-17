import axios from 'axios';
axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const getProduct = async query => {
  const { data } = await axios.get(`/product?query=${query}`);
  // console.log('data', data);
  return data;
};

export const addProduct = async product => {
  const { data } = await axios.post('/day', product);
  // console.log('data', data);
  return data.accessToken;
};

export const getDayProduct = async () => {
  const { data } = await axios.get('/day');
  return data;
};
export const deleteDayProduct = async id => {
  const { data } = await axios.delete(`/day/${id}`);
  return data;
};
