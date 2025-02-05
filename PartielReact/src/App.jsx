import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";



export default function App() {
  return (
    <div className="App">
      <Link to="/">
      </Link>

      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
