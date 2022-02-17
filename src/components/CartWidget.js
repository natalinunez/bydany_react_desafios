import { BsHandbag } from "react-icons/bs";

const CartWidget = () => {
    return (
        <div className="containerIconCart bordeVerde " >        
            <BsHandbag className="styleIconCart bordeAzul"/>
            <div className="styleBubbleCart bordeRojo">2</div>
        </div>         
    );
}

export default CartWidget;