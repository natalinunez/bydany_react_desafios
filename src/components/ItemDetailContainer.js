import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {list, getList} from '../utils/db';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([]);    
    const {idItem} = useParams();
    console.log('ItemDetailContainer-valor de idItem');
    console.log(idItem);

    //componentDidMount
    useEffect(() => {        
        getList(list.find(item => item.id === +idItem), 2000)        
        .then((result) => {
            setItem(result);
            console.log('ItemDetailContainer-valor de result');
            console.log(result);
        })
        .catch((error) => console.log("Hubo un problema en la petición"));        
    }, []);
    
    return (
        <ItemDetail item={item} />        
    );

};

export default ItemDetailContainer;