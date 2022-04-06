import { FeedbackItem } from '..';
import { FeedbackItem as FeedbackItemProps } from '../FeedbackItem';

export interface FeedbackListProps {
  feedbacks: FeedbackItemProps[];
  deleteFeedback: (id: string) => void;
}

const FeedbackList = ({ feedbacks, deleteFeedback }: FeedbackListProps) => {
  if (!feedbacks || feedbacks.length === 0) return <p>No feedbacks yet.</p>;

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          deleteFeedback={deleteFeedback}
          id={feedback.id}
          rating={feedback.rating}
          text={feedback.text}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
