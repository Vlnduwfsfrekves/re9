import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
class App extends Component{
    state={
        good: 0,
        neutral: 0,
        bad: 0
    }
    clickButton=(mark)=>{
        this.setState({[mark]:this.state[mark]+1})
    }
    countTotalFeedback=()=>{
        return this.state.good+this.state.neutral+this.state.bad
    }
    countPositiveFeedbackPercentage=()=>{
        return 100/(this.state.good+this.state.neutral+this.state.bad)*this.state.good
    }
    render() {
        return(
            <div>
                <Section title="Leave your feedback"><FeedbackOptions options={['good','bad','neutral']} click={this.clickButton}/></Section>
                <Section title="Statistics">{this.state.good+this.state.neutral+this.state.bad>0?(<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>):(<Notification message="There is no feedback"/>)}</Section>
            </div>
        )
    }
}
export default App