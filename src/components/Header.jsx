import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../contexts/BookContext";

export const Header = () => {
  const { allBooksData } = useContext(BookContext);

  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "#38bdf8" : "white"
  });

  const favouriteCount = allBooksData.filter(({ favourite }) => favourite)
    .length;
  const readCount = allBooksData.filter(({ read }) => read).length;

  return (
    <nav>
      <NavLink to="/" className="navlink" style={getActiveStyle}>
        All Books
      </NavLink>
      <NavLink to="/favourite" className="navlink" style={getActiveStyle}>
        Favourites({favouriteCount})
      </NavLink>
      <NavLink to="/read" className="navlink" style={getActiveStyle}>
        Read({readCount})
      </NavLink>
      <NavLink to="/profile" className="navlink" style={getActiveStyle}>
        Profile
      </NavLink>
    </nav>
  );
};
