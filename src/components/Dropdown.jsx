import useRecommendationStore from '../hooks/useRecommendationStore';
import DropdownItem from './DropdownItem';

export default function Dropdown() {
  const recommendationStore = useRecommendationStore();
  const { recommendation, isOpen } = recommendationStore;

  return (
    isOpen
      ? (
        <ul id="drop-down">
          {recommendation.map((value) => (
            <DropdownItem key={value} value={value} />
          ))}
        </ul>
      )
      : null
  );
}
