import {useState, useContext} from 'react';
import ItemCount from './ItemCount';
import CheckOut from './CheckOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartContext} from './CartContext';

const ItemDetail = (props) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const showAmount = (contador) => {
        alert(`You have selected ${contador} items`);        
        setItemCount(contador);
        test.addToCart(props, contador);
    }
    return(
    <>       
        {  
            props.item && props.item.image
            ?
                <div className="container mt-4" style={{'maxWidth': '60rem'}}>
                    <div className="row g-0 bordeRojo">
                        <div className="col-sm-6 col-md-6 col-lg-6 bordeAzul">         
                            <figure className="figura">
                                <img src={props.item.image} className="imageDetail bordeAmarrillo" 
                                    alt={props.item.name} />                        
                            </figure>       
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 bordeAzul">
                            <div className="card-body cardDetailDescription bordeVerde">
                                <h5 className="card-title bordeRojo fs-3 fw-bold">{props.item.name}</h5>
                                <p className="card-text bordeRojo">{props.item.description}</p>
                                <p className="card-text bordeRojo fs-3 fw-bold">$ {props.item.price}</p> 
                                {  
                                    itemCount === 0
                                    ?<ItemCount stock={props.item.stock} initial={itemCount} onAdd={showAmount} />                                      
                                    :<CheckOut />
                                }                                    
                            </div>
                        </div>
                    </div>
                </div>   
            :<p className="styleLoading">Cargando...</p>
        
        }                                 
                        
    </>        
    )
};

export default ItemDetail;

{/* <div className="card mb-3 description_1" style={{'maxWidth': '60rem'}}>
<div className="row g-0 bordeRojo">
    <div className="col-md-4">                
        <img src={props.item.image} className="img-fluid rounded-start" 
        alt={props.item.name} />
    </div>
    <div className="col-md-8 bordeAmarrillo">
        <div className="card-body bordeVerde">
            <h5 className="card-title bordeRojo fs-3 fw-bold">{props.item.name}</h5>
            <p className="card-text bordeRojo">{props.item.description}</p>
            <p className="card-text bordeRojo fs-3 fw-bold">$ {props.item.price}</p>                        
            <ItemCount stock={5} initial={1} onAdd={showAmount} />                                      
        </div>
    </div>
</div>
</div>                   
</div> */}