import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = (props) => {

    const showAmount = (contador) => alert(`You have selected ${contador} items`)       
    return(
    <>                                
        <div className="card mb-3 description_1" style={{'maxWidth': '60rem'}}>
            <div className="row g-0 bordeRojo">
                <div className="col-md-4">                
                    <img src={props.item.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 bordeAmarrillo">
                    <div className="card-body bordeVerde">
                        <h5 className="card-title bordeRojo fs-3 fw-bold">{props.item.name}</h5>
                        <p className="card-text bordeRojo">Aretes colgantes para mujer, en modelo de corazones dorados de menor a mayor. Úsalos en una cita especial o tu look de diario. Estos corazones son símbolo de amor propio.</p>
                        <p className="card-text bordeRojo fs-3 fw-bold">$ {props.item.price}</p>
                        <p className="card-text bordeRojo ">
                            <ItemCount stock={5} initial={1} onAdd={showAmount} />              
                        </p>                        
                    </div>
                </div>
            </div>
        </div>                   
    </>        
    )
};

export default ItemDetail;