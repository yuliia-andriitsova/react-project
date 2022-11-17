import axios from 'axios';
axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export async function postRegistartionUser(user) {
  const { data } = await axios.post('/auth/register/', user);
  return data;
}

export async function postLogin(body) {
  const { data } = await axios.post('/auth/login/', body);
  return data;
}
export async function postLogout() {
  const { data } = await axios.post('/auth/logout/');
  return data;
}
export async function getUserRefresh() {
  const { data } = await axios.get('/users/refresh/');
  return data;
}
