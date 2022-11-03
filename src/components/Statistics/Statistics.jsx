import PropTypes from 'prop-types';
import css from "../Statistics/Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.statistics}>
    <p className={css.text}>Good: <span>{good}</span></p>
    <p className={css.text}>Neutral: <span>{neutral}</span></p>
    <p className={css.text}>Bad: <span>{bad}</span></p>
    <p className={css.text}>Total: <span>{total}</span></p>
    <p className={css.text}>Positive feedback: <span>{positivePercentage}%</span></p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;