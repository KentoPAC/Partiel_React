import '../css/style.css';
import Header from '../components/Header/header.jsx';
import Footer from '../components/Footer/footer.jsx';
import Searchbar from '../components/Searchbar/searchbar.jsx';
export default function Home() {
  return (
    <>
      <Header></Header>
      <Searchbar></Searchbar>

      <div className="wrapper">
        <div className="tendances-container container">
          <div className="title-filter" id="title-tendances">
            <h2>Tendances</h2>
            <button className="active" id="day">Aujourd'hui</button>
            <button id="week">Cette semaine</button>
          </div>
          <div className="grid-tendances" id="tendances"></div>
        </div>
      </div>

      <div className="wrapper-pop">
        <div className="populaires-container container">
          <div className="title-filter saveMe" id="title-category">
            <h2>Séries TV</h2>
            <button className="active" id="top_rated">Mieux notées</button>
            <button id="popular">Populaires</button>
          </div>
          <div className="grid-tendances" id="populaires"></div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
