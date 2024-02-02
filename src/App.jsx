import { Component } from "react"
class App extends Component{
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
    countPositiveFeedbackPercentage(){
      return 100/(this.state.bad+this.state.good+this.state.neutral)*this.state.good
    }
    countTotalFeedback(){
      return this.state.bad+this.state.good+this.state.neutral
    }
    handleButtonClick = (feedbackType) => {
      this.setState((prevState) => ({
        [feedbackType]: prevState[feedbackType] + 1,
      }));
    };  
    render(){
      return(
        <div>
          <h1>Please leave feedback</h1>
          <br/>
          <button onClick={()=>this.handleButtonClick("good")}>Good</button>
          <button onClick={()=>this.handleButtonClick("bad")}>Bad</button>
          <button onClick={()=>this.handleButtonClick("neutral")}>Neutral</button>
          <br/>
          <h1>Statistics</h1>
          {this.countTotalFeedback()>0?(
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Total: {this.countTotalFeedback()}</li>
            <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
          </ul>
          ):(
            <p>No feedback given</p>
          )}
        </div>
      )
    }
}
export default App