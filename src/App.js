import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
            
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
