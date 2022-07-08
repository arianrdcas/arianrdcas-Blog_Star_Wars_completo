import React from "react";

import {BrowserRouter,Switch,Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Detalle_Planeta from "./views/detalle_planeta";
import Detalle_Nave from "./views/detalle_nave";
import Detalle_Personaje from "./views/detalle_personaje";
import Home from "./views/Home";
import Welcome from "./views/welcome";
import injectContext from './store/appContext'



function App() {
  return (
      <BrowserRouter>
        <Navbar/>

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/detalle_nave" component={Detalle_Nave} />
          <Route exact path="/detalle_personaje" component={Detalle_Personaje} />
          <Route exact path="/detalle_planeta" component={Detalle_Planeta} />
        </Switch>
      </BrowserRouter>
  );
}

export default injectContext(App);
