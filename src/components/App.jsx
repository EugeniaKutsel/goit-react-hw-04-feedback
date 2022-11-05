import {useContext} from "react";
import Container from "./Container/Container";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import { FeedbackContext } from "./FeedbackContext/FeedbackContext";

const App = () => {
  const { good, neutral, bad, options, onLeaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = useContext(FeedbackContext);

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