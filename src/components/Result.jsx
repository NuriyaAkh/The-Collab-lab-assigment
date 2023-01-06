const Result = ({ title, name, onDetails, image, altText }) => {
	const handleDetails = () => {
		onDetails({
			image,
			altText,
		});
	};
	return (
		<li>
			<p>Art name: {title}</p>
			<p>Author name: {name}</p>
			<button type="button" onClick={handleDetails}>
				Details
			</button>
		</li>
	);
};
export default Result;
