import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import Navbar from './Components/navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
    <Router>
        <Routes>
        <Route exact path="/" element={<Login />}>
        </Route>
        <Route path="/todo">

        </Route>
        <Route path="*">

        </Route>
      </Routes>
    </Router>
    </div>
  );
}
 
export default App;

