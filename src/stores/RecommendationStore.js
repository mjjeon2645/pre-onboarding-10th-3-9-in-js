import getRecommendationList from '../api/search';

import Store from './Store';

export default class RecommendationStore extends Store {
  constructor() {
    super();

    this.keyword = '';

    this.recommendation = [];

    this.isOpen = false;
  }

  async fetchRecommendation(keyword) {
    this.keyword = keyword.trim();

    if (!this.keyword) {
      return;
    }

    const data = await getRecommendationList(this.keyword);

    if (data.result.length) {
      this.isOpen = true;
      this.recommendation = data.result;
      this.publish();
      return;
    }

    this.recommendation = data.result;
    this.publish();
  }
}

export const recommendationStore = new RecommendationStore();
