import axios from 'axios';
export const FETCH_PHOTOGRAPHERS = 'FETCH_PHOTOGRAPHERS';


const ROOT_URL = 'https://jsonplaceholder.typicode.com';
export function fetchPhotographers()
{
  const request = axios.get(`${ROOT_URL}/users`);
  return {
    type: FETCH_PHOTOGRAPHERS,
    payload: request
  };
}
