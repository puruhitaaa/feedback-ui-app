import { useState } from 'react';
import { FeedbackList, FeedbackStats } from '../../components';
import FeedbackForm from '../../components/FeedbackForm';
import { FeedbackItem } from '../../components/FeedbackItem';
import { FeedbackData } from '../../data/feedbackData';

const Home = () => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const addFeedback = (newFeedback: FeedbackItem) => {
    setFeedbacks((prev) => [...prev, newFeedback]);
  };

  const deleteFeedback = (id: string) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedbacks(feedbacks.filter((element) => element.id !== id));
    }
  };

  return (
    <div className="container">
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedbacks={feedbacks} />
      <FeedbackList deleteFeedback={deleteFeedback} feedbacks={feedbacks} />
    </div>
  );
};

export default Home;
