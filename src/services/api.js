import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api'
const API_KEY = '22629706-2b1c8bc2d7db5f907a7256f2f'

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  image_type: 'photo',
  key: API_KEY,
}
export const fetchImages = async (imageName, page) => {
  const response = await axios.get('', {
    params: {
      page,
      q: imageName
    }
  });
  return response.data.hits;
};