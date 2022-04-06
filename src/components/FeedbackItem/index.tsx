import { FaTimes } from 'react-icons/fa';
import Card from '../shared/Card';

export interface FeedbackItem {
  id: string;
  rating: number;
  text: string;
  deleteFeedback?: (id: string) => void;
}

const Feedback = ({
  id,
  rating,
  text,
  deleteFeedback = () => null,
}: FeedbackItem) => {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default Feedback;
