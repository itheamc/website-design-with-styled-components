import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navigation from './components/header/navbars/Navigation';
import WebFooter from './components/footer/WebFooter';

function App() {
  return (
    <div>
      <Router>
          <Navigation />
          <Switch>
            <Route path = '/' component = {Homepage} />
          </Switch>

          <WebFooter />
      </Router>
    </div>
  );
}

export default App;
