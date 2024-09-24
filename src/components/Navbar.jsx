import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-xl font-bold">
          Ernæringskokken
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Hjem
          </Link>
          <Link to="/recepies" className="text-gray-300 hover:text-white">
            Oppskrifter
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            Om meg
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
