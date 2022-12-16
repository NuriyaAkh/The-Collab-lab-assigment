const ImageDetailsPage = ({ imageId, altText, goBack }) => {
	return (
		<div>
			<button onClick={goBack}>Back</button>
			<img
				alt={altText}
				src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
			/>
		</div>
	);
};
export default ImageDetailsPage;
