import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(item => (
        <button key={item} type="button" onClick={() => onLeaveFeedback(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};
