import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import Header from '@Components/Header';
import Footer from '@Components/Footer';
import Home from '@Views/Home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
