import { FeedbackList, FeedbackStats } from '../../components';
import FeedbackForm from '../../components/FeedbackForm';

const Home = () => {
  return (
    <div className="container">
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </div>
  );
};

export default Home;
