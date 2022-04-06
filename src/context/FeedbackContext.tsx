import { createContext, ReactNode, useState } from 'react';
import { FeedbackItem } from '../components/FeedbackItem';
import { FeedbackData } from '../data/feedbackData';

interface IFeedbackProvider {
  children: ReactNode;
}

interface IFeedbackContext {
  feedbacks: FeedbackItem[];
  feedbackEdit: {
    item: FeedbackItem;
    edit: boolean;
  };
  addFeedback: (newFeedback: FeedbackItem) => void;
  deleteFeedback: (id: string) => void;
  editFeedback: (item: FeedbackItem) => void;
  updateFeedbackItem: (id: string, updateItem: FeedbackItem) => void;
}

const defaultValue = {
  feedbacks: FeedbackData,
  feedbackEdit: {
    item: {
      id: '1000',
      rating: 10,
      text: 'Edit',
    },
    edit: false,
  },
  addFeedback: () => null,
  deleteFeedback: () => null,
  editFeedback: () => null,
  updateFeedbackItem: () => null,
};

export const FeedbackContext = createContext<IFeedbackContext>(defaultValue);

export const FeedbackProvider = ({ children }: IFeedbackProvider) => {
  const [feedbacks, setFeedbacks] = useState(defaultValue.feedbacks);
  const [feedbackEdit, setFeedbackEdit] = useState(defaultValue.feedbackEdit);

  const addFeedback = (newFeedback: FeedbackItem) => {
    setFeedbacks((prev) => [...prev, newFeedback]);
  };

  const deleteFeedback = (id: string) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedbacks(feedbacks.filter((element) => element.id !== id));
    }
  };

  const editFeedback = (item: FeedbackItem) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedbackItem = (id: string, updateItem: FeedbackItem) => {
    setFeedbacks((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, ...updateItem } : item
      );
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedbackItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
