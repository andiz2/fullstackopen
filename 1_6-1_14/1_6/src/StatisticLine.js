const StatisticLine = (props) => {
	console.log("line", props)
	return (
		<div>
		 {props.text} {props.value}
		</div>
	)
}

export default StatisticLine;
