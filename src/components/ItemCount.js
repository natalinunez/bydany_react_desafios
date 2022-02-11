import React from "react";
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = (props) => {
    let initial = +props.initial;
    let stock = props.stock;
    let onAdd = props.onAdd;

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

    return (
        <>
            <div className="styleCartContainer bordeAzul">                                                              
                <button className="styleButton " onClick={minus}  >-</button>
                    <span className="styleSpan">{contador}</span>
                    <button className="styleButton " onClick={plus}>+</button>                                                    
                <button className="styleButton" onClick={() => onAdd(contador)}>
                    ADD TO CART
                </button>   
            </div>                
        </>        
    );
}

export default ItemCount;