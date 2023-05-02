import { useState } from "react";
import Button from './Button'
import Total from './Total'
import Statistics from './Statistics'
import StatisticLine from './StatisticLine'



const App = () => {
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [good, setGood] = useState(0)
  const [allFeedback, setAll] = useState([])

const handleBad = () => {
	setBad(bad + 1)
	setAll(allFeedback.concat('B'))
}

const handleNeutral = () => {
	setNeutral(neutral + 1)
	setAll(allFeedback.concat('N'))
}

const handleGood = () => {
	setGood(good + 1)
	setAll(allFeedback.concat('G'))
}
  
 

  return (
    <div>
    <h1>give feedback</h1>
    <Button handleState = {handleGood} text = "good"/>
    <Button handleState = {handleNeutral} text = "neutral"/>
    <Button handleState = {handleBad} text = "bad"/>
    <h1>statistics</h1>
    <Statistics 
     good = {good}
     neutral = {neutral}
     bad = {bad}
     allFeedback = {allFeedback}
     />
	 </div>
  );
}

export default App;
