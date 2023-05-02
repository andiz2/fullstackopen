import StatisticLine from './StatisticLine'

const Statistics = (props) => {
	console.log('statistics',props)
	const {text, good, neutral, bad, allFeedback} = props;
	if(allFeedback.length > 0){
		return (
			<div>
			<StatisticLine text = "good" value = {good} /> 
			<StatisticLine text = "neutral" value = {neutral} />
			<StatisticLine text = "bad" value = {bad} />
			<StatisticLine text = "all" value = {good+neutral+bad} />
			<StatisticLine text = "average" value = {parseFloat((good-bad)/(allFeedback.length))} />
			<StatisticLine text = "positive" value = {parseFloat((good)/(allFeedback.length) * 100) + " %"}  /> 
			</div>
		)
	}
	return (
		<p>
			No feedback given
		</p>
	)

}

export default Statistics;