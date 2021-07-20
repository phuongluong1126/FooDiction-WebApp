import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Ingredient from "./pages/Ingredient";
import Recipe from "./pages/Recipe";
import CookNow from "./pages/CookNow";
import DetailIngredient from "./pages/DetailIngredient";
import DetailRecipe from "./pages/DetailRecipe";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Toggle from "./components/layout/Toggle";
import "./components/layout/Toggle.css";

function App() {
  const [toggled, setToggled] = useState(false);
  return (
    <Router>
      <div className="App">
        <Toggle
          toggled={toggled}
          onClick={() => {
            setToggled(!toggled);
          }} className="toggle"
        />
        <div className={`${toggled ? " night" : "day"}`}>
                          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/explore" exact>
              <Explore />
            </Route>
            <Route path="/ingredient" exact>
              <Ingredient />
            </Route>
            <Route path="/recipe" exact>
              <Recipe />
            </Route>
            <Route path="/cook-now" exact>
              <CookNow />
            </Route>
            <Route path="/ingredient/:id" component={DetailIngredient} />
            <Route path="/recipe/:id" component={DetailRecipe} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
