import React from "react";
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = (props) => {
    let initial = +props.initial;
    let stock = props.stock;

    const [contador, setContador] = useState(initial); //HOOKS

    const plus = () => {        
        if (contador < stock){
            setContador(contador + 1);                
        }        
    }

    const minus = () => {        
        if(contador >= 2) {
            setContador(contador - 1);                
        }        
    }

    const showAmount = () => {
        alert(`You have selected ${contador} items`);
    }        

    return (
        <>
            {/* <p className="styleItemListContainer">{greeting}</p> */}            
            <div className="styleCartContainer bordeAzul">   
                <div>
                </div>                                                            
                <button className="styleButton " onClick={minus}  >-</button>
                    <span className="styleSpan">{contador}</span>
                    <button className="styleButton " onClick={plus}>+</button>                                    
                <button className="styleButton" onClick={showAmount}>
                    ADD TO CART
                </button>   
            </div>    
               

            {/* <p>{contador} estrellas</p>
            <button onClick={plus}>Sumar</button>
            <button onClick={minus}>Restar</button>
            <button onClick={showAmount}>ADD TO CART</button> */}
        </>        
    );
}

export default ItemCount;