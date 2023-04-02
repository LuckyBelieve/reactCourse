import Navbar from './navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './home';
function App() {
  return (
   <Router>
      <body>
       <Navbar />
       <main className="app">
       <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
       </Switch>
       </main>
      </body>
    </Router>
  );
}

export default App;
