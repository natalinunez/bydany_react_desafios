import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {  

  const showAmount = (contador) => alert(`You have selected ${contador} items`)       
  
  return (
    <>
      <NavBar />  
      <ItemCount stock={5} initial={1} onAdd={showAmount} />            
      <ItemListContainer  />      
    </>
  );
}

export default App;
