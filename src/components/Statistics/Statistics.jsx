import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={css.statList}>
    <li className={css.statItem}> Good: {good} </li>
    <li className={css.statItem}> Neutral: {neutral}</li>
    <li className={css.statItem}> Bad: {bad}</li>
    <li className={css.statItem}> Total: {total}</li>
    <li className={css.statItem}> Bad: {positivePercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
