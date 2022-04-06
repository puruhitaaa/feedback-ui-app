import { useState } from 'react';
import Card from '../shared/Card';

const FeedbackForm = () => {
  const [reviewContent, setReviewContent] = useState('');

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input
            type="text"
            onChange={(e) => setReviewContent(e.target.value)}
            placeholder="Write a review"
            value={reviewContent}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
