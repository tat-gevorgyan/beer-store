import { Api } from 'utils/connectors';

export const getProducts = async (page) => {
  const params = {
    page: page,
    per_page: 9
  }
    
  try {
    return await Api.get('/beers', { params }).then(({ data }) => {
      if (data) return data;
      else throw new Error('Something went wrong when loading products');
    });
  } catch (err) {
    throw new Error(err);
  }
};
