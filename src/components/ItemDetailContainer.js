import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {list, getList} from '../utils/db';

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({});    

    //componentDidMount
    useEffect(() => {
        // setLoading(false);        
        getList(list[0], 2000)
        .then((result) => {
            setItem(result);
            console.log(result);
        })
        .catch((error) => console.log("Hubo un problema en la petición"));        
    }, []);
    
    return (
        <ItemDetail item={item} />        
    );

};

export default ItemDetailContainer;