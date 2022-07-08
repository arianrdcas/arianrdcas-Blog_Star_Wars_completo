import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "./Estilo.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoPlanetSharp } from "react-icons/io5";
import { SiSkyliner } from "react-icons/si";
import { GiAlienBug } from "react-icons/gi";

const Home = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchPersonajes();
    actions.fetchPlanetas();
    actions.fetchNaves();
  }, []);

  const addFavorito = (nombre) => {
    actions.addFavorito(nombre);
  };

  const sendSinglePersonaje = (url) => {
    actions.fetchSinglePersonaje(url);
  };

  const sendSinglePlaneta = (url) => {
    actions.fetchSinglePlaneta(url);
  };

  const sendSingleNave = (url) => {
    actions.fetchSingleNave(url);
  };

  return (
    <>
      <div className="body fw-bold">
        <div className="container">
          <h1 className="text-center text mt-5">
            “No. No lo intentes. Hazlo, o no lo hagas, pero no lo intentes.”
          </h1>
          <h5 className="pe-5 text-end text">Maestro Yoda</h5>
        </div>
        <div className="container">
          <div className="row">
            <h1 className="mt-5 mb-4 text">
              Personajes <GiAlienBug />
            </h1>
            <div className="d-flex flex-nowrap py-1">
              {store.personajes.map((item, i) => {
                return (
                  <div key={i} className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div
                      className="card bg-transparent text-white"
                      style={{ width: "18rem" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Nombre: {item.name}</h5>
                        <p className="card-text">Gender: {item.gender}</p>
                        <p className="card-text">Hair color: {item.hair_color}</p>
                        <p className="card-text">Eye color: {item.eye_color}</p>
                        <Link
                          to="/detalle_personaje"
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={() => sendSinglePersonaje(item.url)}
                        >
                          Detalles
                        </Link>
                        <button
                          type="button"
                          className="btn btn-outline-warning float-end"
                          onClick={() => addFavorito(item.name)}
                        >
                          <IoMdHeartEmpty />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h1 className="mt-5 mb-4 text">
              Planetas <IoPlanetSharp />
            </h1>
            <div className="d-flex flex-nowrap py-1">
              {store.planetas.map((item, i) => {
                return (
                  <div key={i} className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div
                      className="card bg-transparent text-white"
                      style={{ width: "18rem" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Nombre: {item.name}</h5>
                        <p className="card-text">
                          Periodo de Rotacion: {item.rotation_period}
                        </p>
                        <p className="card-text">Gravedad: {item.gravity}</p>
                        <p className="card-text">Habitantes: {item.population}</p>
                        <Link
                          to="/detalle_planeta"
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={() => sendSinglePlaneta(item.url)}
                        >
                          Detalles
                        </Link>
                        <button
                          type="button"
                          className="btn btn-outline-warning float-end"
                          onClick={() => addFavorito(item.name)}
                        >
                          <IoMdHeartEmpty />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h1 className="mt-5 mb-4 text">
              Naves <SiSkyliner />
            </h1>
            <div className="d-flex flex-nowrap py-1">
              {store.naves.map((item, i) => {
                return (
                  <div key={i} className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div
                      className="card bg-transparent text-white"
                      style={{ width: "18rem" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Nombre: {item.name}</h5>
                        <p className="card-text">Modelo: {item.model}</p>
                        <p className="card-text">Pasajeros: {item.passengers}</p>
                        <p className="card-text">Costo: {item.cost_in_credits}</p>
                        <Link
                          to="/detalle_nave"
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={() => sendSingleNave(item.url)}
                        >
                          Detalles
                        </Link>
                        <button
                          type="button"
                          className="btn btn-outline-warning float-end"
                          onClick={() => addFavorito(item.name)}
                        >
                          <IoMdHeartEmpty />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
