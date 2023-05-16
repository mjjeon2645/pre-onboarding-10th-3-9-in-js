import { useEffect, useState } from 'react';

import debounce from '../utils/debounce';
import useRecommendationStore from './useRecommendationStore';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const recommendationStore = useRecommendationStore();

  const fetchRecommendation = async (keyword) => {
    await recommendationStore.fetchRecommendation(keyword);
  };

  useEffect(() => {
    const debounced = debounce(() => setDebouncedValue(value), delay);
    debounced();

    fetchRecommendation(debouncedValue);

    return () => {
      debounced.clear();
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
