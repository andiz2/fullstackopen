const Total = ({allFeedback, good, bad, neutral}) => {
	if(good+bad+neutral > 0) {
		return (
				<p>good {good} <br />
				neutral {neutral} <br />
				bad {bad} 
				</p>
		)
	}
	return (
		<p>
			No feedback given
		</p>
	)
}

export default Total;
