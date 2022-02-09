import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
function App() {
  return (
    <>
      <NavBar />  
      <ItemListContainer greeting="Hola mundo styleItemListContainer" />
      <ItemCount stock="5" initial="1"/>
    </>
  );
}

export default App;
