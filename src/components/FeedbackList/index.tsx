import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { FeedbackItem } from '..';
import { FeedbackContext } from '../../context/FeedbackContext';

const FeedbackList = () => {
  const { feedbacks } = useContext(FeedbackContext);

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
