import { useContext } from 'react';
import { FeedbackContext } from '../../context/FeedbackContext';

const FeedbackStats = () => {
  const { feedbacks } = useContext(FeedbackContext);

  let average =
    feedbacks.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedbacks.length;

  average = Number(average.toFixed(1).replace(/[.,]0$/, ''));

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} reviews</h4>
      <h4>Average rating {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
