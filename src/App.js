import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import UX from './components/pages/UX';
import Dev from './components/pages/Dev';
import GraphicDesign from './components/pages/GraphicDesign';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/ux" component={UX} />
        <Route path="/dev" component={Dev} />
        <Route path="/graphic-design" component={GraphicDesign} />

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
