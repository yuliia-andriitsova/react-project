import axios from 'axios';
axios.defaults.baseURL = 'https://slimmom-backend.goit.global/auth/register';
export async function postRegistartionUser(user) {
  const { data } = await axios.post('/auth/register/', user);
  return data;
}
