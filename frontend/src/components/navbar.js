import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { AiFillDelete } from "react-icons/ai";
import { useLocation, useHistory, Link } from "react-router-dom";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  const location = useLocation();

  const eliminarFavorito = (i) => {
    let index = i;
    actions.eliminarFavorito(index);
  };

  return (
    <nav className="navbar navbar-light bg-transparent border-bottom border-primary border-2">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="vinilos-decorativos-logo-star-wars-borde.jpg"
            type="button"
            className="img-thumbnail rounded"
            alt="..."
            width="80px"
          />
        </Link>

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className={"nav-link " + (location.pathname === '/profile' ? "active" : "") } to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className={"nav-link " + (location.pathname === '/api/registro' ? "active" : "")} to="/api/registro">
              Registro
            </Link>
          </li>
          {
            !store.isAuth ? (
            <li className="nav-item">
              <Link className={"nav-link " + (location.pathname === '/login' ? "active" : "")} to="/login">
                  Login
              </Link>
            </li>
            ) :
            (
              <li className="nav-item">
                <Link className="nav-link" /* onClick={logout} */ to="/login">
                  Logout
                </Link>
              </li>
            )
          } 
        </ul>

        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </button>
          <ul className="dropdown-menu active dropdown-menu-warning" aria-labelledby="dropdownMenuButton2" >
                {store.favoritosList.length > 0 ? store.favoritosList.map((i) => {
                  return(
                    <li key = {i} >
                      <Link className="dropdown-item"> 
                        <button className="mx-2 border-0 bg-transparent" 
                          onClick={()=>eliminarFavorito(i)}>
                            <AiFillDelete/>
                        </button> 
                      </Link>  
                    </li>
                  )
                }):
                  <li>
                    <Link className="dropdown-item" href="#">Agrega favoritos </Link>
                  </li>
                }
              </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
