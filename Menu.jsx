import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Livres from "./card livre.jsx";
import PoidsIdeal from "../../Poids-ideal.jsx";
import { Covid } from "./API_Covid";

function Menu() {
  return (
    <Router>
      <nav>
        <Link to="/">Poids Ideal</Link> | 
        <Link to="/livres">Livres</Link> | 
        <Link to="/covid">Covid</Link>
      </nav>

      <Switch>
        <Route path="/" component={PoidsIdeal} />
        <Route path="/livres" component={Livres} />
        <Route path="/covid" component={Covid} />
      </Switch>
    </Router>
  );
}

export default Menu;