import { HashRouter as Router, Route } from "react-router-dom";
import { logUserOut } from "../apollo";

function Home() {
  return (
    <div>
      <Router>
        <Route>
          <button onClick={() => logUserOut()}>logOut</button>
        </Route>
      </Router>
    </div>
  );
}

export default Home;
