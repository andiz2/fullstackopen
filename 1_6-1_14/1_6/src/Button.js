const Button = ({handleState, text}) => {
	return (
		<button onClick = {handleState}>
			{text}
		</button>
	)
}


export default Button;
