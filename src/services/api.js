import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (imageName, page) => {
  const API_KEY = '22629706-2b1c8bc2d7db5f907a7256f2f';
  const URL = `?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(URL);
  return response.data.hits;
};