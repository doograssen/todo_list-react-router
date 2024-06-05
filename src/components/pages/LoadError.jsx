
export const LoadError = ({message}) => {
	return (
		<div className="app-container">
			<div className="app-message">
				<p>
					{ message }
				</p>
			</div>
		</div>
	);
}
