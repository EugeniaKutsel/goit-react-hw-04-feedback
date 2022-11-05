import { createContext, useState } from "react";

export const FeedbackContext = createContext();

export const FeedbackContextProvider = ({children}) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  }

  const onLeaveFeedback = ({ target: { name }}) => {
    options[name](prev => prev + 1);
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = good + neutral + bad;
    if (good === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  }

  return (
    <FeedbackContext.Provider value=
      {{
        good,
        neutral,
        bad,
        options,
        onLeaveFeedback,
        countTotalFeedback, countPositiveFeedbackPercentage
      }}>
      {children}
    </FeedbackContext.Provider>
  );
}