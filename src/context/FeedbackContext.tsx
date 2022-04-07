import { createContext, ReactNode, useEffect, useState } from 'react';
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
  isLoading: boolean;
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
  isLoading: false,
  addFeedback: () => null,
  deleteFeedback: () => null,
  editFeedback: () => null,
  updateFeedbackItem: () => null,
};

export const FeedbackContext = createContext<IFeedbackContext>(defaultValue);

export const FeedbackProvider = ({ children }: IFeedbackProvider) => {
  const [feedbacks, setFeedbacks] = useState(defaultValue.feedbacks);
  const [feedbackEdit, setFeedbackEdit] = useState(defaultValue.feedbackEdit);
  const [isLoading, setIsLoading] = useState(defaultValue.isLoading);

  const addFeedback = async (newFeedback: FeedbackItem) => {
    const res = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await res.json();

    setFeedbacks((prev) => [...prev, data]);
  };

  const deleteFeedback = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
      });

      setFeedbacks(feedbacks.filter((element) => element.id !== id));
    }
  };

  const editFeedback = (item: FeedbackItem) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedbackItem = async (id: string, updateItem: FeedbackItem) => {
    const res = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateItem),
    });

    const data = await res.json();

    setFeedbacks((prev) => {
      return prev.map((item) => (item.id === id ? { ...item, ...data } : item));
    });
  };

  const fetchFeedback = async () => {
    const res = await fetch('/feedback');

    const data = await res.json();

    setFeedbacks(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        isLoading,
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
