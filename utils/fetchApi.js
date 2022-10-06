import axios from "axios";

// headers: {
//   'X-RapidAPI-Key': '514bbeb8e2mshb6d0cc8108cc62dp19834ajsn9f70160589d1',
//     'X-RapidAPI-Host':
// }

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })

  return data;
}
