import axios from 'axios';

export function getCategories() {
  const CATEGORIES_URL = 'http://504080.com/api/v1/services/categories'
  return axios.get(CATEGORIES_URL, {
    // mode: 'no-cors',
    // withCredentials: true,
    headers: {
      'Authorization': 'f51a4ae8e56300b1d7096cc9dbc2f19948039a0b'
    },
  }).then(response => {
    const result = response.data.data
    return result
  })
}