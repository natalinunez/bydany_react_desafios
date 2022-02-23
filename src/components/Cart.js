import {useContext} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
    const test = useContext(CartContext);

    console.log(test);

    return(
        <>
           {/* <p className="ms-5 fs-1">I am a Cart</p>  */}
            <div className="container mt-5 ">
                <h3 className="mb-5 text-center fs-4 fw-bold">Carrito de Compras</h3>  
                <div className="containerButtonsCart mb-5">
                    <Link to='/'>
                        <button className="button" onClick={test.clearCart}>Continuar comprando</button>
                    </Link>                                    

                    {test.cartList.length === 0
                        ?<p className="fs-5 ">El carrito está vacio</p>
                        :<button className="button" onClick={test.clearCart}>Eliminar todos los productos</button>                                                    
                    }                    
                </div>              
                <table className="table">
                    <thead >
                        <tr className="text-primary ">
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio ($)</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">    
                        {  
                            test.cartList.map((item, i) => (
                                <tr className=""  key={item.id}>
                                    <td scope="row">{i+1}</td>
                                    <td className="">                
                                        <figure className="figura">
                                            <img src={item.image} className="imageCart bordeAmarrillo" 
                                                alt={item.name} />                        
                                        </figure>       
                                    </td>
                                    <td className="">                
                                        <h6 className="title">{item.name}</h6>
                                    </td>
                                    <td className="">
                                        <p>{item.price}</p>
                                    </td>
                                    <td className="">                                                               
                                        {/* <button id="btnMinus1" className="btn botonCantiCarrito ">-</button> */}
                                        <span>{item.qty}</span>
                                        {/* <button id="btnPlus1" className="btn botonCantiCarrito ">+</button> */}
                                    </td>             
                                    <td className=" ">
                                        <p className=" ">{item.price * item.qty}</p>
                                    </td>
                                    <td>
                                        <button type="button" className="delete btn btn-danger" onClick={() => test.removeItem(item.id)}>X</button>    
                                    </td>
                                </tr>                                            
                            ))
                        }
                    </tbody>
                </table>
            </div>           
        </>
    );
};

export default Cart;