const FeedbackOptions = ({options,click}) => {
    return(
    <div>
    <br/>
    <button onClick={()=>click(options[0])}>Good</button>
    <button onClick={()=>click(options[1])}>Bad</button>
    <button onClick={()=>click(options[2])}>Neutral</button>
    <br/>
    </div>
    )
}
export default FeedbackOptions