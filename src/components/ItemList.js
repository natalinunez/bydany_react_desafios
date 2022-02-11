import { useState } from 'react';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = ({listItems}) => {     

    return (
        <>
            <div className="containerCards bordeAzul" >  
                {   
                    listItems.map(item => 
                        <Item
                            key = {item.id}        
                            image = {item.image} 
                            name = {item.name}
                            price = {item.price}                        
                        />                                        
                    )
                }   
            </div>
        </>
    );
};

export default ItemList;

{/* <div className=" cardProduct" >
<img className="cardImage bordeAmarrillo" src={data[0].image} />
<div className="cardDescription bordeVerde">
    <h5 className="bordeRojo">{data[0].name}</h5>
    <p className="bordeRojo">$ {data[0].price}</p>                        
    <button className="card__boton colorAzul">Ver detalle del producto</button>                        
</div>
</div>   */}