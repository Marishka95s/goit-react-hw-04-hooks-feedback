import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (<>
    {options.map(option => 
        <button type='button' key={option} className={styles.[option]} onClick={()=>onLeaveFeedback(option)}>{option}</button>
    )} </>   
);
FeedbackOptions.propTypes = {
    options: PropTypes.array,
}

export default FeedbackOptions;