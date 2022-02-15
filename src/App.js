import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
// import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {  

  // const showAmount = (contador) => alert(`You have selected ${contador} items`)       
  
  return (
    <>
      <NavBar />     
      {/* <ItemListContainer  />       */}
      <ItemDetailContainer />
      {/* <ItemCount stock={5} initial={1} onAdd={showAmount} />          */}
    </>
  );
}

export default App;
