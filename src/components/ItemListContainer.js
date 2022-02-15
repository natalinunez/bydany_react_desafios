import { useEffect, useState } from 'react';
import Item from './Item';
import {list, getList} from '../utils/db';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    // const [loading, setLoading] = useState(false);

    //componentDidMount
    useEffect(() => {
        // setLoading(false);        
        getList(list, 2000)
        .then((result) => setItems(result))
        .catch((error) => console.log("Hubo un problema en la petición"));        
    }, [])       

    return (                            
        <>
            <div className="containerCards bordeAzul" >  
                <ItemList listItems={items} />
            </div>
        </>        
    );
};

export default ItemListContainer;