import { useState } from 'react';
import { FeedbackList, FeedbackStats } from '../../components';
import FeedbackForm from '../../components/FeedbackForm';
import { FeedbackData } from '../../data/feedbackData';

const Home = () => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedbacks(feedbacks.filter((element) => element.id !== id));
    }
  };

  return (
    <div className="container">
      <FeedbackForm />
      <FeedbackStats feedbacks={feedbacks} />
      <FeedbackList deleteFeedback={deleteFeedback} feedbacks={feedbacks} />
    </div>
  );
};

export default Home;
