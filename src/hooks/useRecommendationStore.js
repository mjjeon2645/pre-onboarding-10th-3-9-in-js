import useStore from './useStore';

import { recommendationStore } from '../stores/RecommendationStore';

export default function useRecommendationStore() {
  return useStore(recommendationStore);
}
