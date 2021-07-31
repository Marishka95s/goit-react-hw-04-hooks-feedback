import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';


class App extends Component {
  static defaultProps = {
    totalFeedbacks: 0,
    percentageOfGoodFeedb: 0,
  }
  static propTypes = {
    totalFeedbacks: PropTypes.number,
    percentageOfGoodFeedb: PropTypes.number,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.number),
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  // onLeaveFeedback = (option) => {
  //   this.setState({[option]: this.state[option] + 1 })
  // }
  onLeaveFeedback = (option) => {
    this.setState(prevState => {
      return({
        [option]: prevState[option] + 1 
      }) 
    })
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = good + bad + neutral;
    return totalFeedbacks;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const percentageOfGoodFeedb = ((good / (good + bad + neutral)) * 100).toFixed(2);
    return percentageOfGoodFeedb;
  }

  render(totalFeedbacks) {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Please leave feedback</h1>
        </header>

        <Section title="">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
        </Section>
        { (totalFeedbacks!== 0) 
        ? <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section> 
        : <Notification message="No feedback given" /> }        
      </div>
    );
  }  
}

export default App;
