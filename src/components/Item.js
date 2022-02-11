const Item = (props) => {
    
    return(
        <>                                
            <div className=" cardProduct" >
                <img className="cardImage bordeAmarrillo" src={props.image} />
                <div className="cardDescription bordeVerde">
                    <h5 className="styleName bordeRojo">{props.name}</h5>
                    <p className="bordeRojo">$ {props.price}</p>                        
                    <button className="card__boton colorAzul">Ver detalle del producto</button>                        
                </div>
            </div>                                  
        </>
    );
};

export default Item;