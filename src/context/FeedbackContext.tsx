import { createContext, ReactNode, useState } from 'react';
import { FeedbackItem } from '../components/FeedbackItem';
import { FeedbackData } from '../data/feedbackData';

interface IFeedbackProvider {
  children: ReactNode;
}

interface IFeedbackContext {
  feedbacks: FeedbackItem[];
  addFeedback: (newFeedback: FeedbackItem) => void;
  deleteFeedback: (id: string) => void;
}

const defaultValue = {
  feedbacks: [
    {
      id: '100',
      rating: 10,
      text: 'This is the greatest rating of all time.',
    },
  ],
  addFeedback: () => null,
  deleteFeedback: () => null,
};

export const FeedbackContext = createContext<IFeedbackContext>(defaultValue);

export const FeedbackProvider = ({ children }: IFeedbackProvider) => {
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
    <FeedbackContext.Provider
      value={{ feedbacks, addFeedback, deleteFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
