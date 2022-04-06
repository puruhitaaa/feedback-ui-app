import { ChangeEvent, useState } from 'react';
import Button from '../shared/Button';
import Card from '../shared/Card';

const FeedbackForm = () => {
  const [reviewContent, setReviewContent] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState('');

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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
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
