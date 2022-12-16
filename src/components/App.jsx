import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import ImageDetailsPage from './ImageDetailsPage';
import { useState } from 'react';
import Result from './Result';

export function App() {
	const [results, setResults] = useState([]);
	const [imgDetails, setImgDetails] = useState('');

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js

		searchArtworks(query).then((json) => {
			console.log(json);
			setResults(json.data);
		});
	}
	const handleShowDetails = ({ image, altText }) => {
		console.log('details');
		//need to show img details
		setImgDetails({
			image,
			altText,
		});
	};
	const handleGoBack = () => {
		console.log('go back');
	};
	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			{/* if search yields result then show image artist ,title and link for more details*/}
			{results.length ? (
				<>
					<ul>
						{results.map((result) => {
							return (
								<Result
									key={result.id}
									altText={result.thumbnail.alt_text}
									image={result.image_id}
									name={result.artist_title}
									title={result.title}
									onDetails={handleShowDetails}
								/>
							);
						})}
					</ul>
					<ImageDetailsPage
						altText={imgDetails.altText}
						goBack={handleGoBack}
						imageId={imgDetails.image}
					/>
				</>
			) : null}

			<Footer />
		</div>
	);
}
