import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
    <Navigation />
    <HomePage />
    <Route path="/:type/:id"><PetDetailsPage /></Route>
    <Route path="/type/:type?"><HomePage /> </Route>
    </div>
    </Router>
  );
}

export default App;
