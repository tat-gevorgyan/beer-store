
import { Api } from 'utils/connectors';

export const getProduct = async id => {
  try {
    return await Api.get(`/beers/${id}`).then(({ data }) => {
       if (data) return data[0];
      else throw new Error(`Product with id ${id} not found`);
    });
  } catch (err) {
    throw new Error(err);
  };
}
