import { useContext } from "react";
import { BsHandbag } from "react-icons/bs";
import {CartContext} from "./CartContext";

const CartWidget = () => {

    return (
        <div className="containerIconCart bordeVerde " >        
            <BsHandbag className="styleIconCart bordeAzul"/>
            <div className="styleBubbleCart bordeRojo">2</div>
        </div>         
    );
}

export default CartWidget;