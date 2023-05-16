import apiRequest from './index';

const RESOURCE = '/search';

const getRecommendationList = async (q) => {
  try {
    const { data } = await apiRequest.get(`${RESOURCE}`, {
      params: {
        q,
      },
    });

    console.log(q, 'search');

    return data;
  } catch (error) {
    throw new Error('API getRecommendationList error');
  }
};

export default getRecommendationList;
