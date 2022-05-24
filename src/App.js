import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
    </>
  );
}

export default App;
