import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import Home from '@views/home';
import Header from '@views/header';
import Footer from '@views/footer';

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
