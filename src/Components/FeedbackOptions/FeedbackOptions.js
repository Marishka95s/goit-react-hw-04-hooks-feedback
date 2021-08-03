import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (<>
    {options.map((option, idx) => 
        <button type='button' name={option} key={idx} className={styles.[option]} onClick={onLeaveFeedback}>{option}</button>
    )} </>   
);
FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onSubmit: PropTypes.func.isRequired,
}

export default FeedbackOptions;