import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navigation from './components/header/navbars/Navigation';
import WebFooter from './components/footer/WebFooter';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <Router>
          <Navigation />
          <Switch>
            <Route exact path = '/' component = {Homepage} />
            <Route exact path = '/dashboard' component = {Dashboard} />
          </Switch>

          <WebFooter />
      </Router>
    </div>
  );
}

export default App;
