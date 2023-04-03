import Navbar from './navbar';
import { BrowserRouter as Route,Switch } from 'react-router-dom';
import Home from './home';
import BlogDetails from './blogDetails';
import CreateNew from './newBlog';
import NotFound from './notFound';
function App() {
  return (
   <Route>
      <div>
       <Navbar />
       <main className="app">
       <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/create'>
          <CreateNew />
        </Route>
        <Route exact path='/blogs/:id'>
         <BlogDetails />
        </Route>
          <Route path='*'>
            <NotFound />
          </Route>
       </Switch>
       </main>
      </div>
    </Route>
  );
}

export default App;
