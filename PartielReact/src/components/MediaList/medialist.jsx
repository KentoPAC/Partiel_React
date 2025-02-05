import { useState, useEffect } from "react";

const API_KEY = "82a4b8a952e82748e2bb3eb4c3c1da59";

function MediaList({ functionName, type = "all", filter = "day", category = "top_rated" }) {
	const [items, setItems] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let url;

		if (functionName === "getDataByTrending") {
			url = `https://api.themoviedb.org/3/trending/${type}/${filter}?api_key=${API_KEY}`;
		} else if (functionName === "getDataByTvCategory") {
			url = `https://api.themoviedb.org/3/tv/${category}?api_key=${API_KEY}&language=fr-FR&page=1`;
		}

		const fetchData = async () => {
			try {
				let response = await fetch(url);
				if (!response.ok) throw new Error("Erreur lors de la récupération des données.");
				let data = await response.json();
				setItems(data.results.slice(0, 4)); // Limite à 4 résultats
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [functionName, type, filter, category]);

	if (loading) return <p>Chargement en cours...</p>;
	if (error) return <p>Erreur : {error}</p>;

	return (
		<div className="media-list">
			<h2>{functionName === "getDataByTrending" ? "Tendances" : "Séries TV Populaires"}</h2>
			<div className="media-grid">
				{items.map((item) => (
					<div key={item.id} className="media-item">
						<a href={`focus.html?id=${item.id}&type=${type}`}>
							<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.name || item.original_title} />
							<div className="score">
								<p>{item.vote_count === 0 ? "N/A" : `${parseInt(item.vote_average * 10)}%`}</p>
							</div>
							<h5>{item.original_title || item.name}</h5>
							<p>{new Date(item.release_date || item.first_air_date).toLocaleDateString("fr-FR")}</p>
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default MediaList;

