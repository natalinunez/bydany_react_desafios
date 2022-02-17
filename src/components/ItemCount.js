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
            <div className="containerCount">  
                <div className="bordeAmarrillo">
                    <h4 className="bordeRojo">Cantidad</h4>                                                            
                    <div className="containerMinusLess bordeAzul">
                        <button className="buttonMinusPlus " onClick={minus}>-</button>
                        <span className="styleSpan">{contador}</span>
                        <button className="buttonMinusPlus " onClick={plus}>+</button> 
                    </div>
                </div>
                <button className="buttonAddCart" onClick={() => onAdd(contador)}>
                    ADD TO CART
                </button>   
            </div>                
        </>        
    );
}

export default ItemCount;