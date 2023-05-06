// import css from './Statistics.module.css';
// import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul>
    <li> Good: {good} </li>
    <li> Neutral: {neutral}</li>
    <li> Bad: {bad}</li>
    <li> Total: {total}</li>
    <li> Bad: {positivePercentage}%</li>
  </ul>
);
