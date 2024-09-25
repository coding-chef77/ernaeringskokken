import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-primary-dark p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-xl font-bold">
          Ernæringskokken
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-primary-light hover:text-secondary">
            Hjem
          </Link>
          <Link
            to="/recipes"
            className="text-primary-light hover:text-secondary"
          >
            Oppskrifter
          </Link>
          <Link to="/about" className="text-primary-light hover:text-secondary">
            Om meg
          </Link>
          <Link
            to="/contact"
            className="text-primary-light hover:text-secondary"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
