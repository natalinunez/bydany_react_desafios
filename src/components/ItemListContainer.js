import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {list, getList} from '../utils/db';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    
    //esto es sin destructuracion
    // const urlParams = useParams();
    //esto es con destructuracion
    const {idCategory} = useParams();
    
    //esto es con destructuracion
    console.log(idCategory);
    //esto es sin destructuracion
    // console.log(urlParams.idCategory);

    //componentDidUpdate
    useEffect(() => {        
        if (idCategory === undefined){
            getList(list, 2000)
                .then((result) => setItems(result))
                .catch((error) => console.log("Hubo un problema en la petición"));            
        } else {
            getList(list.filter(item => item.categoryId === +idCategory), 2000)
                .then((result) => setItems(result))
                .catch((error) => console.log("Hubo un problema en la petición"));            
        }
    }, [idCategory])       

    return (                            
        <>         

            <ItemList listItems={items} />           
        </>        
    );
};

export default ItemListContainer;