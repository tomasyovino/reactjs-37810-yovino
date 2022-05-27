import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './containers/ItemDetailContainer';
// import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
