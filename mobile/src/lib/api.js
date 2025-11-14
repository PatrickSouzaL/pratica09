import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://proweb.leoproti.com.br',
  timeout: 10000,
});

export async function getProducts() {
  const { data } = await api.get('/produtos');
  return data;
}

export async function getProductById(id) {
  const list = await getProducts();
  return list.find((p) => String(p.id) === String(id)) || null;
}
