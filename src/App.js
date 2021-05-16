// import './assets/css/normalize.css';
// import './assets/css/skeleton.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import UX from './components/pages/UX';
import Dev from './components/pages/Dev';
import GraphicDesign from './components/pages/GraphicDesign';

function App() {
  // basename={process.env.PUBLIC_URL}
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />

        <Route path="/ux" component={UX} />
        <Route path="/dev" component={Dev} />
        <Route path="/graphic-design" component={GraphicDesign} />
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
