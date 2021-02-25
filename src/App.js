import './App.scss';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Cat from './components/Cat';

function App() {

  return (
    <div className="Home">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/?breed=:id" component={Home} />
        <Route path="/:id" component={Cat} />
      </Switch>
    </div>
  );
}

export default App;
