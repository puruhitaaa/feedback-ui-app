import { AnimatePresence, motion } from 'framer-motion';
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
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              deleteFeedback={deleteFeedback}
              id={feedback.id}
              rating={feedback.rating}
              text={feedback.text}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
