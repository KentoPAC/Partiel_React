import './searchbar.scss';

export default function Header() {
	return (

		<div className="search-container saveMe">
			<input type="text" placeholder="Rechercher un film" />
			<button type="submit"><i className="fas fa-search"></i></button>
		</div>

	);
}

