
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from './redux/store';
import './App.css';
import Home from './pages/Home';

export default function App() {
	return (
		<Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
		</Provider>
	);
}
