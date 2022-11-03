import {useState} from "react";
import Container from "./Container/Container";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

const App = () => {
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
    <>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(options)} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
         {!countTotalFeedback()
              ? <Notification message="There is no feedback! :(" />
              : <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            }
        </Section>
      </Container>
    </>
  );
}

export default App;