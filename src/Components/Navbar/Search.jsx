import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="search__button_container">
      <Link className="search__button">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="navbar__search"
          title="Búsqueda"
        />
      </Link>
    </div>
  );
};

export default Search;
