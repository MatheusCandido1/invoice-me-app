import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'http://localhost:8000/api/v1';

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: 'Bearer ' + localStorage.getItem('@Auth:token'),
  'X-Company-Id': localStorage.getItem('@User:company')
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 5000;

axiosClient.defaults.withCredentials = false;

export function get(URL) {
  return axiosClient.get(`/${URL}`).then(response => response);
}

export function post(URL, payload) {
  return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function put(URL, payload) {
  return axiosClient.put(`/${URL}`, payload).then(response => response);
}

export function destroy(URL) {
  return axiosClient.delete(`/${URL}`).then(response => response);
}