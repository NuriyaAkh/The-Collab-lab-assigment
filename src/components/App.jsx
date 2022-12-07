import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import ImageDetailsPage from './ImageDetailsPage';
import { useState } from 'react';

export function App() {
	const [results, setResults] = useState([]);

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js

		searchArtworks(query).then((json) => {
			console.log(json);
			setResults(json);
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			{/* if search yelds result then show image artist ,title and link for more details*/}
			{results.length ? (
				<>
					<p>Results</p>
					<ul>
						{results.map(({ image_id, title, artist_title }) => {
							return;
							<li key={image_id}>
								<p>Title{title}</p>
								<p>Artist{artist_title}</p>
								<a href="#">Details</a>
							</li>;
						})}
					</ul>
				</>
			) : null}
			<Footer />
		</div>
	);
}
