import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FeedbackContext } from '../../context/FeedbackContext';
import Card from '../shared/Card';

export interface FeedbackItem {
  id: string;
  rating: number;
  text: string;
}

const Feedback = ({ id, rating, text }: FeedbackItem) => {
  const { deleteFeedback } = useContext(FeedbackContext);

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
