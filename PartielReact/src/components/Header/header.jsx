import './header.scss';

export default function Header() {
	return (
		< nav className="desktop-nav" >
			<a href="index.html"><i class="fas fa-film"></i></a>
			<ul>
				<li><a href="">Films</a></li>
				<li><a href="">Séries</a></li>
				<li><a href="">Populaires</a></li>
			</ul>
		</nav >
	);
}

