import { BsHandbag } from "react-icons/bs";

const CartWidget = () => {
    return (
        <div className="containerIconCart bordeVerde " >        
            <BsHandbag className="styleCart bordeAzul"/>
            <div className="styleBubble bordeRojo">2</div>
        </div>         
    );
}

export default CartWidget;