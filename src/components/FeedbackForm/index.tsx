import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FeedbackContext } from '../../context/FeedbackContext';
import RatingSelect from '../RatingSelect';
import Button from '../shared/Button';
import Card from '../shared/Card';

const FeedbackForm = () => {
  const [reviewContent, setReviewContent] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState('');
  const { addFeedback } = useContext(FeedbackContext);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (reviewContent === '') {
      setIsBtnDisabled(true);
      setMessage('');
    } else if (reviewContent !== '' && reviewContent.length < 10) {
      setMessage('Text must be at least 10 characters.');
      setIsBtnDisabled(true);
    } else {
      setMessage('');
      setIsBtnDisabled(false);
    }

    setReviewContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (reviewContent.trim().length >= 10) {
      const newFeedback = {
        id: uuidv4(),
        text: reviewContent,
        rating,
      };

      addFeedback(newFeedback);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Write a review"
            value={reviewContent}
          />
          <Button isDisabled={isBtnDisabled} type="submit">
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
