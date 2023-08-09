import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link, useHistory } from "react-router-dom";
import Search from "../../Static/search.png";
import UserIcon from "../../Static/user.png";

function NavBar({ isLogged }) {
  const [searchItem, setSearchItem] = useState("");
  const [bgShow, setBgShow] = useState(false);
  const [searchBoxShow, setSearchBoxShow] = useState(false);
  const [searchIconBg, setSearchIconBg] = useState(false);

  const history = useHistory();
  const Test = true;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBgShow(true);
      } else {
        setBgShow(false);
      }
    });
  }, []);

  function settingSearchItem(event) {
    const movie = event.target.value;
    setSearchItem(movie);
  }

  function handleSearch() {
    if (searchItem === "") {
      searchBoxShow
        ? setSearchBoxShow(false) && setSearchIconBg(false)
        : setSearchBoxShow(true) && setSearchIconBg(true);
    } else {
      history.push(`/search/${searchItem}`);
    }
  }

  return (
    <nav className={`navBar ${bgShow && "bgColor"}`}>
      <div className="brand">
        <h1 className="brand__name">
          <Link to="/" style={{ color: "white" }}>
            Movie Paradise
          </Link>
        </h1>
      </div>
      <div className="nav__items">
        <div className="search">
          <input
            type="text"
            className={`searchBox ${searchBoxShow && "search__show"}`}
            placeholder="Enter A Movie"
            onChange={settingSearchItem}
          />
          <img
            onClick={handleSearch}
            className={`search__icon ${searchIconBg && "search__icon--bg"}`}
            src={Search}
            alt=""
          />
        </div>
        {isLogged ? (
          <Link>
            <img className="user__icon navs" src={UserIcon} alt="" />
          </Link>
        ) : (
          <Link to="/login">
            <h2 className="navs">Login</h2>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
